import React from 'react'
import Imagen from "../../images/imagen-del-home.png"


function Home() {
  const homeStyle = {
    container : {
      backgroundColor: "#f3f1f1ff",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      textAlign: "center",
    },

    title: {
      color: "#132646ff",
      fontSize: "4rem",
      marginBottom: "1rem",
    },

    text: {
      color: "#3a65afff",
      fontSize: "1.5rem",
      fontStyle: "italic",
      maxWidth: "800px",
    },
  }

  return (
      <div style={homeStyle.container} className='d-flex justify-content-center align-items-center flex-column'>
        <div className="container mb-5">
      	  <h1 style={homeStyle.title}>TecnoPlus</h1>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p style={homeStyle.text}>
                Nuestra misión es ofrecer productos tecnológicos innovadores y de alta calidad que mejoren la vida de nuestros clientes, brindando una experiencia de compra confiable, rápida y cercana.
              </p>
            </div>
            <div className="col-md-6">
              <img 
                src={Imagen}
                alt="Misión de la empresa" 
                style={{ width: "100%", maxWidth: "400px", borderRadius: "10px" }}
              />
            </div>
          </div>
        </div>
      </div>

  )
}

export default Home