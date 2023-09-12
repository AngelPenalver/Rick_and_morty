import Card from "../Card/Card"
import useCharacters from '../SearchBar/onSearch/onSearch'
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { filterCards, orderCards, } from "../../redux/Action";
import style from './Favorites.module.css'
function Favorites() {
  const myFavorites = useSelector(state => state.myFavorites)
  const dispatch = useDispatch()
  const [aux, setAux] = useState(false);
  const { onClose } = useCharacters()
  function handleOrder(event) {
    dispatch(orderCards(event.target.value))
    aux ? setAux(true) : setAux(false)
  }
  function handleFilter(event) {
    dispatch(filterCards(event.target.value))
  }
  return (
    <div className={style.divi}>
      <h1>Favoritos</h1>
      <div className={style.option}>
        <select name="" id="" onChange={handleOrder} className={style.select}><option value="A">Ascendente</option><option value="B">Descendente</option></select>
        <select name="" id="" onChange={handleFilter} className={style.select}>
          <option value="All">Todos</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
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
              gender={element.gender}
              onClose={() => onClose(element.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites
