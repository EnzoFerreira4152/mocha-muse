import './StockItem.css'
import { useState, useContext } from 'react'
import { AppContext } from '../../Context/Contexto'

// eslint-disable-next-line react/prop-types
export const StockItem = ({nombre, cantidad, objetoId}) => {
  const { handleChange } = useContext(AppContext)
  const [cantidadItem, setCantidadItem] = useState(cantidad)

  const clickSub = ()=>{
    if(cantidadItem > 0) {
      setCantidadItem(cantidadItem - 1)
      handleChange(objetoId, cantidadItem - 1)  
    }
  }

  const clickAdd = () =>{
    setCantidadItem(cantidadItem + 1)
    handleChange(objetoId, cantidadItem + 1)
  }

  const nombreClase = cantidadItem <= 5 ? 'circuloRojo' : cantidadItem <= 9 ? 'circuloNaranja' : '';

  return(
    <>
      <div key={objetoId} className='itemsContainer'>
      <div className='descripcionItem'>
        <p key={objetoId} className={`tituloItem ${nombreClase}`}>{nombre}</p>
      </div>
      <div className='botonesContainer'>
        <button className='botonStock botonRestar' onClick={() => (clickSub())}>-</button>
        <p>{cantidadItem}</p>
        <button className='botonStock botonSumar'  onClick={() => (clickAdd())}>+</button>
      </div>
    </div>
    </>
  )
}