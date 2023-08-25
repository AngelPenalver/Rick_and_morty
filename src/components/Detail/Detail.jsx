import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Nav from '../Nav/Nav';
import style from '../Nav/Nav.module.css'

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
    <div className={style.container}>
      <NavLink to='/home' ><Nav onSearch={props.onSearch} /></NavLink>
      <div className={style.image}>
        <img src={character.image} alt={character.name} />
      </div>
      <div className={style.text}>
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
