import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from '../Nav/Nav.module.css'

export default function SearchBar(props) {
  const { onSearch } = props;
  const [id, idChange] = useState("");
  const handleChange = (event) => {
    idChange(event.target.value);
  }
  return (
    <div>
      <input type='number' onChange={handleChange} value={id} className={style.input} placeholder="Buscar"/>
      <NavLink to='/home'>
        <button onClick={() => onSearch(id)} className={style.button}>Agregar</button>
      </NavLink>
    </div>
  );
}
