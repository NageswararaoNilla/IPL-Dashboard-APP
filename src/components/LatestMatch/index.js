import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    umpires,
    manOfTheMatch,
    competingTeamLogo,
    result,
    venue,
    date,
    competingTeam,
    firstInnings,
    secondInnings,
  } = matchDetails

  return (
    <div className="match-container">
      <div className="match-date">
        <div>
          <p>{competingTeam}</p>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-team-logo"
        />
      </div>
      <hr className="line" />
      <div>
        <p>First Innings</p>
        <p>{firstInnings}</p>
        <p>Second Innings</p>
        <p>{secondInnings}</p>
        <p>Man Of The Match</p>
        <p>{manOfTheMatch}</p>
        <p>Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
