import './App.css'
import {Home} from './components/Home/Home'
import {Carta} from './components/Carta/Carta'
import {Info} from './components/Info/Info'
import {Stock} from './components/Stock/Stock'
import {Route, Routes} from 'react-router-dom'
import {AppContext} from './Context/Contexto'
import {useEffect, useContext} from 'react'

function App() {
  const {setDataDB, apiURL} = useContext(AppContext);

  useEffect(() => {
    fetch(apiURL)
    .then(response => response.json())
    .then(data => {
      setDataDB(data);
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/about" element={<Info />} />
        <Route path="/menu" element={<Carta />} />
      </Routes>
    </>
  )
}

export default App
