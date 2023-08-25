import './App.css';
import axios from 'axios';
import Cards from './components/Cards/Cards.jsx';
import React, { useState } from 'react';
import Nav from './components/Nav/Nav';
import { Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail'
import Login from './components/Login/Login'
import { useLocation } from 'react-router-dom';
function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
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
  }
  return (
    <div className='App'>
      {
        location.pathname !== '/' && <Nav onSearch={onSearch}/>
      }

      <Routes>
        <Route path='/home' element={
          <Cards characters={characters} onClose={onClose} />
        } />
        <Route path='/' element={<Login />} />
        <Route path="/detail/:id" element={<Detail onSearch={onSearch} />} />
        <Route path='/About' element={<><Nav onSearch={onSearch} /> <About /> </>} />
      </Routes>
    </div>
  );
}
export default App;

