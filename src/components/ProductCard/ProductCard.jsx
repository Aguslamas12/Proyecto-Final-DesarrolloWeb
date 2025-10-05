import React from 'react'
import { Link } from "react-router-dom";

function ProductCard({ producto }) {
  if (!producto) return null;

  const productcardStyle = {
    tarjeta: {
      width: '100%',
      maxWidth: '16rem',
    },
    imagen: {
      width: '100%',
      height: '16rem',
      objectFit: 'cover',
    },
    text: {
      color: "#A4BAB7",
      fontSize: "1rem",
      lineHeight: "1.5",
      padding: "0px 16px",
    },
  }

  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className='card bg-dark' style={productcardStyle.tarjeta}>
          <img className="card-img-top img-fluid border-bottom"
           style={productcardStyle.imagen}
            src={producto.imagen}
            alt={producto.nombre}
            onError={(e) => (e.target.src = "https://placehold.co/400x400/eee/ccc?text=Sin+Portada")}/>
          <div className='card-body' style={productcardStyle.text}>
              <h3 className='card-title'>{producto.nombre}</h3>
              <div className='container text-start'>
                <ul>
                  {producto.precio && (<li><p className='card-text'><b>Precio:</b> ${producto.precio?.toFixed(2)}</p></li>)}
                  <li><p className='card-text'><b>Unidades:</b> {producto.stock}</p></li> 
                </ul>  
              </div>
          </div>
          <div className='mb-3'>
            <Link className='btn btn-primary' to={`/Producto/${producto.id}`}>Ver Detalles</Link>
          </div>
      </div>
    </div>
  )
}

export default ProductCard