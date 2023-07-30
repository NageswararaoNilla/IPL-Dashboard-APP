import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeamLogo, result, competingTeam, matchStatus} = matchDetails
  const textColor = matchStatus === 'Won' ? 'green' : 'red'

  return (
    <li className="match-result-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="card-competing-team-logo"
      />
      <p className="card-heading">{competingTeam}</p>
      <p className="card-result">{result}</p>
      <p className={`status ${textColor}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
