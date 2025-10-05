import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { getItemById, updateItem, deleteItem } from '../../api/api';
import toast from 'react-hot-toast';

const COLLECTION_NAME = 'productos';

function ProductDetail() {
  const ProductdetailStyle = {
    container: {
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      padding: "2rem",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    spinnerContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "40vh",
    },
    spinner: {
      border: "6px solid #f3f3f3",
      borderTop: "6px solid #3498db",
      borderRadius: "50%",
      width: "60px",
      height: "60px",
      animation: "spin 1s linear infinite",
    },
    error: {
      textAlign: "center",
      fontSize: "1.5rem",
      color: "#e74c3c",
      paddingTop: "2rem",
    },
    content: {
      background: "rgba(143, 163, 165, 0.8)",
      padding: "2rem",
      borderRadius: "8px",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
      maxWidth: "800px",
      width: "100%",
    },
    imagen: {
      width: "100%",
      maxWidth: "300px",
      height: "300px",
      objectFit: "cover",
      borderRadius: "8px",
      border: "1px solid #eee",
    },
    info: {
      flex: 1,
      fontSize: "1.5rem",
      color: "gray",
    },
    name: {
      fontSize: "3rem",
      margin: "0 0 1rem",
      color: "black",
    },
    price: {
      fontSize: "2rem",
      color: "#27ae60",
      margin: "1rem 0",
      fontWeight: "bold",
    },
    stock: {
      fontSize: "1.2rem",
      color: "#7f8c8d",
    },
    buttonGroup: {
      display: "flex",
      gap: "1rem",
      flexWrap: "wrap",
      marginTop: "1rem",
    },
    button: {
      flex: 1,
      padding: "0.8rem",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "1rem",
      color: "white",
      background: "#3498db",
    },
    backButton: {
      display: "inline-block",
      marginTop: "2rem",
      textDecoration: "none",
      padding: "0.8rem 1.5rem",
      background: "gray",
      color: "white",
      borderRadius: "4px",
      fontSize: "1.5rem",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      marginTop: "1rem",
    },
    input: {
      padding: "0.75rem",
      border: "1px solid #ddd",
      borderRadius: "4px",
      fontSize: "1rem",
    },
    errorMessage: {
      color: "#ef4444",
      marginTop: "-0.5rem",
      fontSize: "0.875rem",
    },
  };

  const [Product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  const fetchProduct = async () => {
    const item = await getItemById(COLLECTION_NAME, id);
    if (item) {
      setProduct(item);
      setValue("nombre", item.nombre);
      setValue("precio", item.precio);
      setValue("stock", item.stock);
      setValue("imagen", item.imagen);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const onUpdateSubmit = async (data) => {
    const ProductData = {
      ...data,
      precio: parseFloat(data.precio),
      stock: parseInt(data.stock, 10),
    };

    const success = await updateItem(COLLECTION_NAME, id, ProductData);
    if (success) {
      toast.success('Producto actualizado con éxito.');
      setIsEditing(false);
      fetchProduct();
    } else {
      toast.error('Error al actualizar el producto.');
    }
  };

  const handleDelete = async () => {
    if (window.confirm(`¿Estás seguro de que quieres eliminar "${Product.nombre}"?`)) {
      const success = await deleteItem(COLLECTION_NAME, id);
      if (success) {
        toast.success('Producto eliminado con éxito.');
        navigate('/productos');
      } else {
        toast.error('Hubo un error al eliminar el producto.');
      }
    }
  };

  const renderContent = () => {
    if (loading) {
      return (
        <div style={ProductdetailStyle.spinnerContainer}>
          <div style={ProductdetailStyle.spinner}></div>
        </div>
      );
    }

    if (!Product) {
      return <div style={ProductdetailStyle.error}>Producto no encontrado.</div>;
    }

    if (isEditing) {
      return (
        // Si se presiona editar muestra esta pantalla
        <div className='container p-4 rounded-4 bg-dark'>
          <h2 className='text-white'><b>Editando:</b> {Product.nombre}</h2>
          <form onSubmit={handleSubmit(onUpdateSubmit)} style={ProductdetailStyle.form}>
            <input style={ProductdetailStyle.input} placeholder="Nombre" {...register("nombre", { required: "El nombre es obligatorio" })} />
            {errors.nombre && <p style={ProductdetailStyle.errorMessage}>{errors.nombre.message}</p>}

            <input style={ProductdetailStyle.input} placeholder="Precio" type="number" step="0.01" {...register("precio", { required: "El precio es obligatorio" })} />
            {errors.precio && <p style={ProductdetailStyle.errorMessage}>{errors.precio.message}</p>}

            <input style={ProductdetailStyle.input} placeholder="Stock" type="number" {...register("stock", { required: "El stock es obligatorio" })} />
            {errors.stock && <p style={ProductdetailStyle.errorMessage}>{errors.stock.message}</p>}

            <input style={ProductdetailStyle.input} placeholder="URL de la imagen" {...register("imagen", { required: "La imagen es obligatoria" })} />
            {errors.image && <p style={ProductdetailStyle.errorMessage}>{errors.imagen.message}</p>}

            <div style={ProductdetailStyle.buttonGroup}>
              <button type="submit" style={{ ...ProductdetailStyle.button, background: '#3498db' }}>Guardar Cambios</button>
              <button type="button" onClick={() => setIsEditing(false)} style={{ ...ProductdetailStyle.button, background: '#95a5a6' }}>Cancelar</button>
            </div>
          </form>
        </div>
      );
    }

    return (

      <div className='container p-4 rounded-4 bg-white'>
        <div style={ProductdetailStyle.content}>
          <img src={Product.imagen}
           alt={Product.nombre}
            style={ProductdetailStyle.imagen}
            onError={(e) => e.target.src='https://placehold.co/300x300/eee/ccc?text=Error'} />
          <div style={ProductdetailStyle.info}>
            <h1 style={ProductdetailStyle.name}>{Product.nombre}</h1>
            <p style={ProductdetailStyle.price}>${Product.precio?.toFixed(2)}</p>
            <p style={ProductdetailStyle.stock}>Unidades disponibles: {Product.stock}</p>
            <div style={ProductdetailStyle.buttonGroup}>
              <button onClick={() => setIsEditing(true)} style={{ ...ProductdetailStyle.button, background: '#f1c40f' }}>Editar</button>
              <button onClick={handleDelete} style={{ ...ProductdetailStyle.button, background: '#e74c3c' }}>Eliminar</button>
            </div>
          </div>
        </div>
        <Link to="/Productos" style={ProductdetailStyle.backButton}>← Volver al listado</Link>
      </div>
    );
  };

  return (
    <div style={ProductdetailStyle.container}>
      {renderContent()}
    </div>
  );
}

export default ProductDetail;