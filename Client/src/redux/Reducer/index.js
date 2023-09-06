import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "../Action";

let initialState = { myFavorites: [], allCharacters: [], character: [] };

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.myFavorites, action.payload]// Agregar el elemento solo a myFavorites
      };

    case REMOVE_FAV:
      return {
        ...state,
        allCharacters: state.allCharacters.filter(
          (character) => character.id !== parseInt(action.payload)
        ),
        myFavorites: state.myFavorites.filter(
          (character) => character.id !== parseInt(action.payload)
        ), // Actualizar myFavorites también
      };

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
