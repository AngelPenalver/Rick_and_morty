import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from '../Nav/Nav.module.css'

export default function SearchBar(props) {
  const { onSearch } = props;
  const [id, idChange] = useState("");
  const handleChange = (event) => {
    idChange(event.target.value);
  }
  let randomNum = Math.floor(Math.random() * 825) + 1;
  return (
    <div>
      <input type='number' onChange={handleChange} value={id} className={style.input} placeholder="Buscar" />
      <NavLink to='/home'>
        <button onClick={() => onSearch(id)} className={style.button}>🔎</button>
        <button onClick={() => onSearch(randomNum)} className={style.button}>🔁</button>
      </NavLink>
    </div>
  );
}
