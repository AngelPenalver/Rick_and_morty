import { NavLink } from "react-router-dom";

export default function Card({ name, id, species, gender, origin, status, image, onClose }) {
  return (
    <div className="card-container">
          <button onClick={onClose}>X</button>
      <NavLink className="NavLink" to={`/detail/${id}`}>
        <div className="card-image">
          <img src={image} alt='' />
        </div>
        <div className="card-text">
          <h2>{name}</h2>
          <p>{species}</p>
          <p>{gender}</p>
          <p>{origin}</p>
          <p>{status}</p>
        </div>
      </NavLink>
    </div>
  )
}
