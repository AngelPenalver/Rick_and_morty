import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";
const Detail = () => {
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
  }, [id]);

  return (
    <div>
      <NavLink to='/home' ><Nav/></NavLink>
      <h1>{character.name}</h1>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Origin:{character.origin ? character.origin.name : "Unknown"}</p>
      <img src={character.image} alt={character.name} />
    </div>
  );
};

export default Detail;
