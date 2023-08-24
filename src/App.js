import './App.css';
import axios from 'axios';
import Cards from './components/Cards.jsx';
import React, { useState } from 'react';
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';

function App() {
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
  }

  return (
    <div className='App'>
      <Routes>
        <Route path='/home' element={
          <>
            <Nav onSearch={onSearch} />
            <Cards characters={characters} onClose={onClose} />
          </>
        } />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path='/About' element={<><Nav onSearch={onSearch}/> <About /> </>} />

      </Routes>
      {/* <Outlet/> */}
    </div>


  );
}

export default App;

