import "./Info.css";

export const Info = () => {
  return (
    <>
      <div className="infoContainer">
        <div className="image"></div>
        <div className="cajaInfo">
          <h3>Quienes somos</h3>
          <div className="historia">
            <p>
              Nuestra historia en Argentina comienza en 2008, con la primera tienda en en barrio de Palermo. Esto dio inicio a un camino de sueños y metas por cumplir. Rápidamente nos consolidamos en el mercado como uno de los referentes de cafetería al paso. Y hoy, con más de 30 tiendas en diferentes ciudades del país y un servicio delivery que nos permite llegar a todas las provincias, nuestros sueños y metas siguen creciendo.
              <br></br>
              Aquí compartimos energía positiva en cada taza de café. Cultivamos relaciones duraderas con los cafeteros para obtener los mejores granos de las zonas cafeteras, 100% arábicos y con certificación Rainforest Alliance.
            </p>
            <div className="quote">
              <i>
                &quot;Productos finamente seleccionados, bajo estandares de calidad premium. Para que nuestros clientes disfruten experiencias acompañados de un buen cafe.&quot;
              </i>
              <p className="ceo">CEO: Emiliano Guouman</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
