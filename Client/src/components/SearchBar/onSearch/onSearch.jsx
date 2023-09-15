/* eslint-disable */
import { useState } from "react";
import axios from "axios";
import { removeFav } from "../../../redux/Action";
import { useDispatch } from "react-redux";
export default function useCharacters() {
    const dispatch = useDispatch()
    const [characters, setCharacters] = useState([]);
    const onClose = (id) => {
        setCharacters((oldChars) => oldChars.filter((char) => char.id !== id));
        dispatch(removeFav(id))
    }

    const onSearch = async (id) => {
        try {
            const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
            if (data) {
                setCharacters((oldChars) => {
                    if (oldChars.some((char) => char.id === data.id)) {
                        window.alert('Ya agregaste un personaje con esta ID')
                        console.log(oldChars.id);
                        return oldChars;
                    } else {
                        return [...oldChars, data];
                    }
                });
            }
        } catch (error) {
            console.log(error.message)
            window.alert('¡No hay personajes con este ID!');
        }
    }
    return {
        characters, onSearch, onClose
    };
}
