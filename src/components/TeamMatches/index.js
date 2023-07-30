import {Component} from 'react'

import './index.css'

// const teamMatchesApiUrl = ''

class TeamMatches extends Component {
  state = {teamMatchesData: {}}

  componentDidMount() {
    this.getTeamMatchesData()
  }

  getCamelCase = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  getTeamMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const recentMatchesArray = data.recent_matches.map(each =>
      this.getCamelCase(each),
    )
    const updateData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: this.getCamelCase(data.latest_match_details),
      recentMatches: recentMatchesArray,
    }
    // console.log(updateData)
    this.setState({teamMatchesData: updateData})
  }

  render() {
    const {teamMatchesData} = this.state
    const {teamBannerUrl} = teamMatchesData
    return (
      <div>
        <h1>RB</h1>
        <img src={teamBannerUrl} alt="team banner" className="team-banner" />
        {/* <LatestMatch />
                <MatchCard /> */}
      </div>
    )
  }
}

export default TeamMatches
