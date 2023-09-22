import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, FILTER_STATUS } from "../Action";

let initialState = { myFavorites: [], allCharacters: [], character: [] };

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
        character: action.payload
      };
    case REMOVE_FAV:
      return { ...state, myFavorites: action.payload };

    case FILTER:
      if (action.payload === "All") {
        return {
          ...state,
          myFavorites: state.allCharacters,
          character: state.allCharacters
        };
      } else {
        return {
          ...state,
          myFavorites: state.allCharacters.filter(
            (character) => character.gender === action.payload
          ),
          character: state.allCharacters.filter(
            (character) => character.gender === action.payload
          )
        };
      }
    case FILTER_STATUS:
      if (action.payload === "All") {
        return {
          ...state,
          myFavorites: state.character,
        };
      } else {
        return {
          ...state,
          myFavorites: state.character.filter(
            (character) => character.status === action.payload && character.status === action.payload
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
