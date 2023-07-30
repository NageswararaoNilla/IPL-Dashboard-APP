import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeamLogo, result, competingTeam, matchStatus} = matchDetails

  return (
    <li className="match-result-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competing-team-logo"
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
