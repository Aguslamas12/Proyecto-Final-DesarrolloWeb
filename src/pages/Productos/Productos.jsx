import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { getItems } from '../../api/api';
import ProductCard from '../../components/ProductCard/ProductCard';

const COLLECTION_NAME = 'productos';

function Productos() {

  const productosStyle = {
    container: {
      padding: "5rem",
      minHeight: "100vh",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },

    divisiones: {
      backgroundColor: "#EAE1DF",
      borderRadius: "8px",
      padding: "1rem",
    },
    
  }

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      const items = await getItems(COLLECTION_NAME);
      setProductos(items);
      setLoading(false);
    };
    fetchProductos();
  }, []);

  return (
    <div style={productosStyle.container}>
      {/* Parte de arriba Texto y Boton de agregar libro */}
      <div className="container rounded-5 py-3 my-3" style={productosStyle.divisiones}> 
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="text-dark">Nuestros Productos</h1>
          <Link className="btn btn-success p-3" to="/Productos/nuevo">+ Agregar Producto</Link>
        </div>
      </div>
    
      {/* Parte de abajo. Esto abarca el loading y las tarjetas cargadas */}
      <div className="container rounded-5 py-3 my-3" style={productosStyle.divisiones}>
        <div className='row justify-content-between'>
          {loading ? (
            // Parte del cargando...
            <div className='spinner-border' role='status'></div>
          ) : (
            // Cargado de las tarjetas de los libros
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {productos.map((producto) => (
                <ProductCard key={producto.id} producto={producto} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Productos
