import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Navbar} from './components/Navbar/Navbar'
import {Footer} from './components/Footer/Footer'
import { BrowserRouter} from 'react-router-dom'
import {AppProvider, AppContext} from './Context/Contexto'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <Navbar/>
        <App/>
        <Footer/>
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
)
