import './Carta.css'
import { useContext, useState } from 'react';
import { MenuItem } from './MenuItem';
import { AppContext } from '../../Context/Contexto';

export const Carta = () => {
  const { dataDB, dataActualizar, setDataActualizar, apiURL } = useContext(AppContext)
  const [textoCompra, setTextoCompra] = useState("")

  const handleActualizarClick = () => {
    fetch(apiURL + "/compra", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataActualizar),
    })
    .then(response => {
      response.ok && setDataActualizar([])
      return response.json()
    })
    .then(handleRefreshClick())
  };

  const handleRefreshClick = () => {
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <div className='mainContainerCarta'>
      <div className='titulo'>
        <h2>Carta</h2>
      </div>
      <div className='cartaCaja'>
        <div className='menu'>
          <h4 className='tituloSeccionCarta'>Bebida</h4>
          {dataDB.filter(elem => elem.tipo == "Bebida").map((objeto, index) => (<MenuItem key={index} nombre={objeto.nombre} objetoId={objeto.id} precio={objeto.precio} descripcion={objeto.descripcion} cantidad={objeto.cantidad}/>))}
          <h4 className='tituloSeccionCarta'>Comida</h4>
          {dataDB.filter(elem => elem.tipo == "Comida").map((objeto, index) => (<MenuItem key={index} nombre={objeto.nombre} objetoId={objeto.id} precio={objeto.precio} descripcion={objeto.descripcion} cantidad={objeto.cantidad}/>))}
        </div>
        <div className='accionesContainerCarta'>
          <button className='botonPrimario acciones botonCompraCarta' onClick={handleActualizarClick}>Confirmar compra</button>
        </div>
      </div>
    </div>
  )
}