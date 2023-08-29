import './App.css';
import Cards from './components/Cards/Cards.jsx';
import React, { useState } from 'react';
import Nav from './components/Nav/Nav';
import { Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail'
import Form from './components/Login/Login'
import { useLocation, useNavigate } from 'react-router-dom';
import Favorites from './components/Favorites/Favorites';
import { useEffect } from 'react';
import useCharacters from './components/SearchBar/onSearch/onSearch';
function App() {
  
  const {onSearch,characters, onClose} = useCharacters();
  const location = useLocation();
  
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = 'ejemplo@gmail.com';
  const PASSWORD = 'cotrasena';
  
  function login(setInput) {
    if (setInput.password === PASSWORD && setInput.email === EMAIL) {
      setAccess(true);
      navigate('/home');
    }
  }
  // useEffect(() => {
  //   !access && navigate('/');
  // }, [access]);
  return (
    <div className='App'>
      {
        location.pathname !== '/' && <Nav onSearch={onSearch} />
      }
      <Routes>
        <Route path='/home' element={
          <Cards characters={characters} onClose={onClose} />
        } />
        <Route path='/Favorites' element={<Favorites />} />
        <Route path='/' element={<Form login={login} />} />
        <Route path="/detail/:id" element={<Detail onSearch={onSearch} />} />
        <Route path='/About' element={<><Nav onSearch={onSearch} /> <About /> </>} />
      </Routes>
    </div>
  );
}
export default App;

