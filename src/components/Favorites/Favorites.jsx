import { connect } from "react-redux";
import Card from "../Card/Card"
import useCharacters from '../SearchBar/onSearch/onSearch'
function Favorites({ myFavorites }) {
  const { onClose } = useCharacters()
  return (
    <div>
      <h1>Favoritos</h1>
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
