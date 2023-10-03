import './Carta.css'
import './Menu.css'
import { useState, useContext } from 'react'
import { AppContext } from '../../Context/Contexto'

export const MenuItem = ({nombre, cantidad, objetoId, precio, descripcion})=>{
  const { handleChange } = useContext(AppContext)
  const [cantidadItem, setCantidadItem] = useState(0)

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

  return(
    <>
      <div key={objetoId} className='menuElem'>
      <div className='infoElem'>
        <div className='infoDescripcion'>
          <p className='tituloElem'>{nombre} <span>{"$" + precio}</span></p>
          <p className='descripcionElem'><i>{descripcion}</i></p>
        </div>
      </div>
      <div key={objetoId} className='botoneraElem'>
        <button className='botonSub botonCarta' onClick={() => (clickSub())}>-</button>
        <p className='cantidadProducto'>{cantidadItem}</p>
        <button className='botonAdd botonCarta' onClick={() => (clickAdd())}>+</button>
      </div>
    </div>
    </>
  )
}