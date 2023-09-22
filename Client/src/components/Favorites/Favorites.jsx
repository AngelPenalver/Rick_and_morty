import Card from "../Card/Card"
import useCharacters from '../SearchBar/onSearch/onSearch'
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { filterCards, filterStatus, orderCards, } from "../../redux/Action";
import style from './Favorites.module.css'
function Favorites() {
  const [reset, setReset] = useState(false)
  const myFavorites = useSelector(state => state.myFavorites)
  const dispatch = useDispatch()
  const [aux, setAux] = useState(false);
  const { onClose } = useCharacters()
  function handleOrder(event) {
    dispatch(orderCards(event.target.value))
    aux ? setAux(true) : setAux(false)
  }
  function handleFilter(event) {
    reset ? setReset(true) : setReset(false)
    dispatch(filterCards(event.target.value))
  }
  function handleFilterStatus(event) {
    dispatch(filterStatus(event.target.value))
  }
  console.log(myFavorites)
  return (
    <div className={style.divi}>
      <h1>Favoritos</h1>
      <div className={style.option}>
        <select name="" id="" onChange={handleOrder} className={style.select}><option value="A">Ascendente</option><option value="B">Descendente</option></select>
        <select name="" id="" onChange={handleFilter} className={style.select}>
          <option value="All">Todos</option>
          <option value="Male">Masculinos</option>
          <option value="Female">Femeninos</option>
          <option value="Genderless">Sin genero</option>
          <option value="unknown">Desconocido</option>
        </select>
        <select name="" id="" onChange={handleFilterStatus} className={style.select}>
          <option value="All">Todos</option>
          <option value="Alive">Vivo</option>
          <option value="Dead">Muerto</option>
          <option value="unknown">Desconocido</option>
        </select>
      </div  >
      <div className={style.div}>
        {myFavorites.map((element) => (
          <div className={style.card}>
            <Card className={style.card}
              image={element.image}
              id={element.id}
              key={element.id}
              name={element.name}
              origin={element.origin}              
              location={element.location}
              gender={element.gender}
              status={element.status}
              onClose={() => onClose(element.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites
