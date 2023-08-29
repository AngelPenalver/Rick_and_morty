import { useState } from "react";
import axios from "axios";

export default function useCharacters() {
    const [characters, setCharacters] = useState([]);
    const onClose = (id) => {
        setCharacters((oldChars) => oldChars.filter((char) => char.id !== parseInt(id)));
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
