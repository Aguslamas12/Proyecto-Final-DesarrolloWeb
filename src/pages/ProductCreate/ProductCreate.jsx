import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { createItem } from '../../api/api';
import toast from 'react-hot-toast';


const COLLECTION_NAME = 'productos';

function ProductCreate() {
  const productCreateStyle = {
    container: {
      width: "100%",
      minHeight: "100vh", // Abarca toda la pantalla
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
    containerForm: {
      background: "rgba(190, 186, 186, 0.9)",
      padding: "2rem",
      borderRadius: "8px",
      boxShadow: "0 4px 15px rgba(16, 17, 16, 0.2)",
      maxWidth: "600px",
      width: "100%",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
    input: {
      padding: "0.75rem",
      border: "1px solid #ddd",
      borderRadius: "4px",
      fontSize: "1rem",
    },
    button: {
      padding: "0.8rem",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "1rem",
      transition: "background-color 0.2s",
      color: "white",
      background: "#3498db",
    },
    error: {
      color: "#e74c3c",
      fontSize: "0.875rem",
    },
  };

  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const productData = {
      nombre: data.nombre,
      precio: parseFloat(data.precio),
      imagen: data.imagen || "https://placehold.co/200x300?text=Sin+imagen",
      descripcion: data.descripcion || "",
      stock: parseInt(data.stock || 0, 10),
    };
    const newItem = await createItem(COLLECTION_NAME, productData);
    if (newItem) {
      toast.success('Producto creado con éxito.');
      navigate('/Productos');
    } else {
      toast.error('Error al crear el producto.');
    }
  };

  return (
    <div className="py-5" style={productCreateStyle.container}>

      <div className="container align-items-center border rounded-4 border-3 border-white p-5" style={productCreateStyle.containerForm}>

        <form onSubmit={handleSubmit(onSubmit)} style={productCreateStyle.form}>
          {/* nombre del formulario */}
          <h2 className='container text-black'>Agregar Nuevo Producto</h2>

          {/* Inputs del formulario */}
          <input
            placeholder="nombre"
            {...register("nombre", { required: "El nombre es obligatorio" })}
            style={productCreateStyle.input}
          />
          {errors.nombre && <p style={productCreateStyle.error}>{errors.nombre.message}</p>}

          <input
            placeholder="Precio"
            type="number"
            step="0.01"
            {...register("precio", { required: "El precio es obligatorio" })}
            style={productCreateStyle.input}
          />
          {errors.precio && <p style={productCreateStyle.error}>{errors.precio.message}</p>}

          <input
            placeholder="Stock"
            type="number"
            {...register("stock", { required: "El stock es obligatorio" })}
            style={productCreateStyle.input}
          />
          {errors.stock && <p style={productCreateStyle.error}>{errors.stock.message}</p>}

          <input
            placeholder="URL de la imagen"
            {...register("imagen", { required: "La imagen es obligatoria" })}
            style={productCreateStyle.input}
          />
          {errors.imagen && <p style={productCreateStyle.error}>{errors.imagen.message}</p>}

          <button type="submit" style={productCreateStyle.button}>Guardar</button>
        </form>
      </div>
    </div>
  );
}

export default ProductCreate;
