import { connect } from "react-redux";
import Card from "../Card/Card"
import useCharacters from '../SearchBar/onSearch/onSearch'
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { filterCards, orderCards, } from "../../redux/Action";
import style from './Favorites.module.css'
function Favorites({ myFavorites }) {
  const dispatch = useDispatch()
  const [aux, setAux] = useState(false);

  const { onClose } = useCharacters()
  function handleOrder(event) {
    dispatch(orderCards(event.target.value))

    if (aux) {
      setAux(false)
    } else {
      setAux(true)
    }
  }
  function handleFilter(event) {
    dispatch(filterCards(event.target.value));

  }


  return (
    <div>
      <h1>Favoritos</h1>
      <div className={style.option}>

        <select name="" id="" onChange={handleOrder}><option value="A">Ascendente</option><option value="B">Descendente</option></select>

        <select name="" id="" onChange={handleFilter}>
          <option value="All">Todos</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>

        </select>
      </div>

      {myFavorites.map((element) => (
        <Card
          image={element.image}
          id={element.id}
          key={element.id}
          name={element.name}
          gender={element.gender}
          onClose={() => onClose(element.id)}
        />
      ))}
    </div>
  );
}
function mapStateToProps(state) {
  return {
    ...state,
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, null)(Favorites);
