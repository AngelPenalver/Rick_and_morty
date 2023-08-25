import SearchBar from "./SearchBar";
import style from './Nav.module.css'
import { NavLink } from "react-router-dom";
export default function Nav(props) {
  return (
    <nav className={style.nav}>
      <ul>
        <li><NavLink to='/Home' ><button>Home</button></NavLink></li>
        <li><NavLink to='/About'><button>About</button></NavLink></li>
        <li><SearchBar onSearch={props.onSearch} /></li>
        <li><NavLink to='/'><button>Cerrar sesion</button></NavLink></li>
      </ul>
    </nav>
  )
}