import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

// const teamMatchesApiUrl = ''

class TeamMatches extends Component {
  state = {teamMatchesData: {}, isLoading: true}

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
    this.setState({teamMatchesData: updateData, isLoading: false})
  }

  renderTeamMatches = () => {
    const {teamMatchesData, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatchesData
    return isLoading ? (
      <div className="loader-spin" testid="loader">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      <div className="team-container">
        <img src={teamBannerUrl} alt="team banner" className="team-banner" />
        <p>Latest Matches</p>
        <LatestMatch matchDetails={latestMatchDetails} />
        <ul className="recent-matches-list">
          {recentMatches.map(eachMatch => (
            <MatchCard matchDetails={eachMatch} key={eachMatch.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return <div className="bg-container">{this.renderTeamMatches()}</div>
  }
}

export default TeamMatches
