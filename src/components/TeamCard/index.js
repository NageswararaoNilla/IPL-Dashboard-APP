import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails
  return (
    <Link to={`/ipl/${id}`} className="team-card-link">
      <li className="team-card">
        <img src={teamImageUrl} alt={name} className="team-card-img" />
        <h1 className="team-card-heading">{name}</h1>
      </li>
    </Link>
  )
}

export default TeamCard
