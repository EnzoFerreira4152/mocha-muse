import './Stock.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { StockItem } from './StockItem'
import { AppContext } from '../../Context/Contexto'

export const Stock = () => {
  const { dataDB, dataActualizar, setDataActualizar, apiURL } = useContext(AppContext)

  const handleActualizarClick = () => {
    fetch(apiURL + "/actualizar", {
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
    console.log('Datos actualizados:', dataActualizar);
  };

  const handleRefreshClick = () => {
    setTimeout(() => {
      window.location.reload();
    }, 1300);
  };

  return (
    <div className="stockContainer">
      <div className='tituloSeccion'>
        <h3>Modificar Stock</h3>
      </div>
      {dataDB.map((objeto, index) => (<StockItem key={index} nombre={objeto.nombre} cantidad={objeto.cantidad} objetoId={objeto.id} />))}
      <div className='accionesContainer'>
        <button className='botonPrimario acciones' onClick={()=>(handleActualizarClick(), handleRefreshClick())}>Actualizar</button>
        <Link to="/"><button className='botonSecundario acciones'>Volver</button> </Link>
      </div>
    </div>
  )
}