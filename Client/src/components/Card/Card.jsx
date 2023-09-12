import { Link } from "react-router-dom";
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
    setIsFav(false);
    dispatch(isFav ? removeFav(id) : addFav({ name, id, species, gender, origin, status, image }));
  }
  return (
    <div className={style.div}>
      <div className={style.container}>
        {isFav ? (
          <button onClick={handleFavorite} className={style.fav}>❤️</button>
        ) : (
          <button onClick={handleFavorite} className={style.fav}>🤍</button>
        )}
        {location.pathname !== '/fav' && <button onClick={onClose} className={style.close}>❌</button>}
      </div>
      <Link className="Link" to={`/detail/${id}`}>
        <img src={image} alt='' className={style.img} />
      </Link>
      <div className={style.Link} style={{ textDecorationStyle: 'none' }}>
        <h3>{name}</h3>
        <p>{species}</p>
        <p>{gender}</p>
        <p>{origin}</p>
        <p>{status}</p>
      </div>
    </div>

  )
}
function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites
  }
}
export default connect(mapStateToProps)(Card);
