import { useEffect, useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  const [dataDB, setDataDB] = useState([]);
  const [dataActualizar, setDataActualizar] = useState([]);
  const [apiURL, setApiURL] = useState("http://18.228.199.225/stock")

  const url_1 = "http://localhost:8080/stock"
  const url_2 = "http://18.228.199.225/stock"

  useEffect(()=>{
    console.log(dataActualizar)
  }, [dataActualizar])

  const handleChange = (objetoId, cantidadNueva) => {
    const dataNueva = [...dataActualizar]
    const objetoExistente = dataNueva.find((objeto) => objeto.id === objetoId);

    if(objetoExistente){
      const objetosNoModif = dataNueva.filter((objeto) => objeto.id !== objetoId);
      const objetoNuevo = {
        id: objetoId,
        cantidad: cantidadNueva
      }
      setDataActualizar([...objetosNoModif, objetoNuevo])
    }else{
      const objetoNuevo = {
        id: objetoId,
        cantidad: cantidadNueva
      }
      dataNueva.push(objetoNuevo)
      setDataActualizar(dataNueva)
    }
  }
  
    return (
      <AppContext.Provider
        value={{
          dataDB,
          setDataDB,
          dataActualizar,
          setDataActualizar,
          handleChange,
          apiURL
        }}
      >
        {children}
      </AppContext.Provider>
    );
}