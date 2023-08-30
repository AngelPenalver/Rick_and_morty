import { NavLink } from "react-router-dom";
import { addFav, removeFav } from "../../redux/Action";
import { connect } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import style from './Card.module.css'


function Card({ name, id, species, gender, origin, status, image, onClose, dispatch, myFavorites }) {
  const location = useLocation();
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
    
      <div className={style.div}>
        {location.pathname !== '/Favorites' && <button onClick={onClose} style={style.close}>X</button>}

      
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <NavLink className="NavLink" to={`/detail/${id}`}>
          <h3>{name}</h3>
          <p>{species}</p>
          <p>{gender}</p>
          <p>{origin}</p>
          <p>{status}</p>
          <img src={image} alt='' className={style.img} />
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
