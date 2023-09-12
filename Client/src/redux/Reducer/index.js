import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "../Action";

let initialState = { myFavorites: [], allCharacters: [], character: [] };

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAV:
      return { ...state, myFavorites: action.payload, allCharacters: action.payload };
    case REMOVE_FAV:
      return { ...state, myFavorites: action.payload };
  
    case FILTER:
      if (action.payload === "All") {
        return {
          ...state,
          myFavorites: state.allCharacters, // Restablecer myFavorites al valor original
        };
      } else {
        return {
          ...state,
          myFavorites: state.allCharacters.filter(
            (character) => character.gender === action.payload
          ),
        };
      }

    case ORDER:
      let sortedFavorites = [...state.myFavorites];
      if (action.payload === "A") {
        sortedFavorites.sort((a, b) => a.id - b.id);
      } else {
        sortedFavorites.sort((a, b) => b.id - a.id);
      }
      return {
        ...state,
        myFavorites: sortedFavorites,
      };

    default:
      return state;
  }
}
