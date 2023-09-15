/* eslint-disable no-alert */
import "./App.css";
import axios from "axios";
import Cards from "./components/Cards/Cards.jsx";
import React, { useState } from "react";
import Nav from "./components/Nav/Nav";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import { useLocation, useNavigate } from "react-router-dom";
import Favorites from "./components/Favorites/Favorites";
import { useEffect } from "react";
import useCharacters from "./components/SearchBar/onSearch/onSearch";

function App() {
  const { onSearch, characters, onClose } = useCharacters();
  const location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  async function login(userData) {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    try {
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
      !access && window.alert('Usuario o contraseña ingresado son incorrecto o no estan registrados') 
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    
    !access && navigate("/");
  }, [access]);
  return (
    <div className='App'>
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route
          path='/home'
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path='/fav' element={<Favorites />} />
        <Route path='/' element={<Form login={login} />} />
        <Route path='/detail/:id' element={<Detail onSearch={onSearch} />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}
export default App;
