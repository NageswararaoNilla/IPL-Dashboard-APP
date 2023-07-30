import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails
  return (
    <Link to={`/team-matches/${id}`} className="team-card-link">
      <li className="team-card">
        <img src={teamImageUrl} alt={name} className="team-card-img" />
        <p className="team-card-heading">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
