import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { getItems, createItem, deleteItem } from '../../api/api';
import toast from 'react-hot-toast';


const COLLECTION_NAME = 'contactos';

function Contact() {
  const [contactos, setContactos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const contactStyle = {
    container: {
      width: "100%",
      minHeight: "100vh",
      padding: "2rem",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    formCard: {
      background: "rgba(190, 186, 186, 0.9)",
      padding: "2rem",
      borderRadius: "8px",
      boxShadow: "0 4px 15px rgba(14, 14, 14, 0.2)",
      maxWidth: "800px",
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
    textarea: {
      padding: "0.75rem",
      border: "1px solid #ddd",
      borderRadius: "4px",
      fontSize: "1rem",
      resize: "none",
    },
    button: {
      padding: "0.8rem",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "1rem",
      transition: "background-color 0.2s",
      color: "white",
      background: "#0d5c91ff",
    },
    error: {
      color: "#e74c3c",
      marginTop: "-0.5rem",
    },
    table: {
      marginTop: "2rem",
      width: "100%",
      borderCollapse: "collapse",
      overflowX: "auto",
    },
    th: {
      background: "#3498db",
      color: "white",
      padding: "0.75rem",
      textAlign: "left",
    },
    td: {
      padding: "0.75rem",
      borderBottom: "1px solid #ddd",
    },
    deleteButton: {
      padding: "0.5rem 1rem",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      background: "#e74c3c",
      color: "white",
    },
  };

  const fetchContactos = async () => {
    setLoading(true);
    const items = await getItems(COLLECTION_NAME);
    setContactos(items);
    setLoading(false);
  };

  useEffect(() => {
    fetchContactos();
  }, []);

  const onSubmit = async (data) => {
    try {
      await createItem(COLLECTION_NAME, data);
      toast.success('¡Mensaje enviado con éxito!');
      reset();
      fetchContactos();
    } catch (error) {
      toast.error('Hubo un error al enviar el mensaje.');
      console.error("Error al crear contacto: ", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteItem(COLLECTION_NAME, id);
      setContactos(contactos.filter(c => c.id !== id));
      toast.success("Mensaje eliminado.");
    } catch (error) {
      toast.error("Error al eliminar el mensaje.");
    }
  };

  return (
    <div style={contactStyle.container}>
      <div style={contactStyle.formCard}>

        {/* Seccion del formulario */}
        <form onSubmit={handleSubmit(onSubmit)} style={contactStyle.form}>
          <h1>Formulario de Contacto</h1>
          <input
            id="name"
            placeholder="Nombre"
            {...register('name', { required: 'El nombre es obligatorio' })}
            style={contactStyle.input}
          />
          {errors.name && <p style={contactStyle.error}>{errors.name.message}</p>}

          <input
            id="email"
            type="email"
            placeholder="Email"
            {...register('email', {
              required: 'El email es obligatorio',
              pattern: { value: /^\S+@\S+$/i, message: 'Formato de email inválido' }
            })}
            style={contactStyle.input}
          />
          {errors.email && <p style={contactStyle.error}>{errors.email.message}</p>}

          <textarea
            id="message"
            rows="4"
            placeholder="Mensaje"
            {...register('message', { required: 'El mensaje no puede estar vacío' })}
            style={contactStyle.textarea}
          ></textarea>
          {errors.message && <p style={contactStyle.error}>{errors.message.message}</p>}

          <input type="submit" value={"Enviar mensaje"} style={contactStyle.button} />
        </form>

        <hr />
        {/* Seccion de los mensajes recibidos */}
        <div className='my-4 pb-5 pt-3 rounded bg-white'>
          
          <h2 className='pb-3'>Mensajes Recibidos</h2>
          {loading ? (
            <p>Cargando mensajes...</p>
          ) : contactos.length > 0 ? (

            <table style={contactStyle.table}>
              <thead>
                <tr>
                  <th style={contactStyle.th}>Nombre</th>
                  <th style={contactStyle.th}>Email</th>
                  <th style={contactStyle.th}>Mensaje</th>
                  <th style={contactStyle.th}>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {contactos.map(contacto => (
                  <tr key={contacto.id}>
                    <td style={contactStyle.td}>{contacto.name}</td>
                    <td style={contactStyle.td}>{contacto.email}</td>
                    <td style={contactStyle.td}>{contacto.message}</td>
                    <td style={contactStyle.td}>
                      <button
                        onClick={() => handleDelete(contacto.id)}
                        style={contactStyle.deleteButton}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className='py-3'>Aún no has recibido ningún mensaje.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;