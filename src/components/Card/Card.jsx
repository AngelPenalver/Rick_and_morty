import { NavLink } from "react-router-dom";
import { addFav, removeFav } from "../../redux/Action";
import { connect } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

function Card({ name, id, species, gender, origin, status, image, onClose, dispatch, myFavorites }) {
  const [isFav, setIsFav] = useState(false);
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites])
  function handleFavorite() {
    if (!isFav) {
      setIsFav(true);
      dispatch(addFav({ name, id, species, gender, origin, status, image }));
    } else {
      setIsFav(false);
      dispatch(removeFav(id));
    }
  }
  return (
    <div className="card-container">
      <button onClick={onClose}>X</button>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <NavLink className="NavLink" to={`/detail/${id}`}>
        <div className="card-image">
          <img src={image} alt='' />
        </div>
        <div className="card-text">

          <h2>{name}</h2>
          <p>{species}</p>
          <p>{gender}</p>
          <p>{origin}</p>
          <p>{status}</p>
        </div>
      </NavLink>
    </div>
  )
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    addFav: (character) => {
      dispatch(addFav(character))
    },
    removeFav: (id) => {
      dispatch(removeFav(id))
    }
  }
}
function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Card);
