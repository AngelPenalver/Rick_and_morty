import React, {useState} from "react";
import { NavLink } from "react-router-dom";


export default function SearchBar(props) {
  const {onSearch} = props;
  const [id, idChange] = useState("");
  const handleChange = (event) => {
   idChange(event.target.value);
 }
  return (
     <div>
      
      <input type='search'onChange={handleChange} value={id}   />

        <NavLink to='/home'>
        <button onClick={() => onSearch(id)}>Agregar</button>

        </NavLink>
     </div>
  );
}
