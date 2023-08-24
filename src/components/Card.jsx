import { Link } from "react-router-dom";
// import Detail from "./Deatil";
export default function Card({ name, id, species, gender, origin, status, image, onClose }) {
  return (
    <div >
      <button onClick={onClose} >X</button>
      <Link to={`/detail/${id}`} >
        <h3 className="card-name">{name}</h3>
      </Link>
      {/* <h2>{name}</h2> */}
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <h2>{origin}</h2>
      <h2>{status}</h2>
      <img src={image} alt='' />
    </div>
  );
}
