import axios from "axios";
import style from './Detail.module.css'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


const Detail = (props) => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setCharacter({});
  }, [id]);

  return (
    <div className={style.div}>
      {/* <NavLink to='/home' ><Nav onSearch={props.onSearch} /></NavLink> 5 */}
      <div >
        <img src={character.image} alt={character.name} className={style.imgDetail}/>
      </div>
      <div className={style.detail}>
        <h1>{character.name}</h1>
        <h2>Status:</h2>
        <p>{character.status}</p>
        <h2>Species:</h2>
        <p>{character.species}</p>
        <h2>Gender: </h2>
        <p>{character.gender}</p>
        <h2>Origin:</h2>
        <p>{character.origin ? character.origin.name : "Unknown"}</p>
        <h2>Location:</h2>
        <p>{character.location ? character.location.name : "Unknown"}</p>
      </div>
    </div>
  );
};

export default Detail;
