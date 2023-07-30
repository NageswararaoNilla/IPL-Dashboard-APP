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
        <div className="match-left-details">
          <p className="competing-team-text">{competingTeam}</p>
          <p className="competing-date">{date}</p>
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
      <div className="match-right-details">
        <p className="sub-head">First Innings</p>
        <p className="sub-answer">{firstInnings}</p>
        <p className="sub-head">Second Innings</p>
        <p className="sub-answer">{secondInnings}</p>
        <p className="sub-head">Man Of The Match</p>
        <p className="sub-answer">{manOfTheMatch}</p>
        <p className="sub-head">Umpires</p>
        <p className="sub-answer">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
