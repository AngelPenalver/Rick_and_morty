import axios from "axios";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const UPDATE_FAVORITES = "UPDATE_FAVORITES"
export const FILTER_STATUS = "FILTER_STATUS";
export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    const { data } = await axios.post(endpoint, character);
    try {
      return dispatch({
        type: "ADD_FAV",
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
export const updateFavorites = (favorites) => {
  return {
    type: 'UPDATE_FAVORITES',
    payload: favorites
  };
}

export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return async (dispatch) => {
    const { data } = await axios.delete(endpoint);
    try {
      return dispatch({
        type: "REMOVE_FAV",
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
export const filterCards = (gender) => {
  return {
    type: "FILTER",
    payload: gender,
  };
};
export const filterStatus = (status) => {
  return{
    type: "FILTER_STATUS",
    payload: status
  }
}
export const orderCards = (order) => {
  return {
    type: "ORDER",
    payload: order,
  };
};
