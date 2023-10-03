import { useNavigate } from "react-router-dom";
import './Navbar.css'

export const Navbar =()=>{

  const navigate = useNavigate();

  const Menus = [
    {
      title: "Home",
      url:"",
    },
    {
      title: "About",
      url:"about",
    },
        {
      title: "Menu",
      url:"menu",
    },
    {
      title: "Stock",
      url: "stock",
    },
  ];

  const botones = Menus.map((objeto, index) => (
    <div key={index} className='buttonContainer'>
      <button key={index} onClick={() => navigate("/" + objeto.url)} className='buttonNav'>{objeto.title}</button>
    </div>
  ));

  return (
    <div className='nav'>
      {botones}
    </div>
  )
}