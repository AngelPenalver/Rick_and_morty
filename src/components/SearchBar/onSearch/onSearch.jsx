import { useState } from "react";
import axios from "axios";
import { removeFav } from "../../../redux/Action";
import { useDispatch } from "react-redux";

export default function useCharacters() {
    const dispatch = useDispatch()
    const [characters, setCharacters] = useState([]);
    const onClose = (id) => {
        setCharacters((oldChars) => oldChars.filter((char) => char.id !== parseInt(id)));
        dispatch(removeFav(id))
    }

    const onSearch = (id) => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacters((oldChars) => {
                    if (oldChars.some((char) => char.id === data.id)) {
                        return oldChars;
                    } else {
                        return [...oldChars, data];
                    }
                });
            } else {
                window.alert('¡No hay personajes con este ID!');
            }
        });
    };

    return {
        characters, onSearch, onClose
    };
}
