import SearchBar from "../SearchBar/SearchBar";
import style from '../Nav/Nav.module.css'
import { NavLink } from "react-router-dom";
export default function Nav(props) {
  return (
    <nav className={style.nav}>
      <ul className={style.ul}>
        <li><NavLink to='/Home' ><button className={style.button}>Home</button></NavLink></li>
        <li><NavLink to='/About' ><button className={style.button}>About</button></NavLink></li>
        <li><SearchBar onSearch={props.onSearch} /></li>
        <li><NavLink to='/fav'><button className={style.button}>Favorites</button></NavLink></li>
        <li><NavLink to='/'><button className={style.button}>Cerrar sesion</button></NavLink></li>
      </ul>
    </nav>
  )
}