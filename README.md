# Project-DesarrolloWeb

Este proyecto es una aplicación web desarrollada en **React**, con base de datos en **Firebase** y desplegada en **Vercel**.

---

## 🚀 Requisitos previos

Antes de empezar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/es/download/) (incluye `npm`)
- [Git](https://git-scm.com/)

---

## 📥 Instalación y ejecución en local

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Daniiel24w/Project-DesarrolloWeb
   ```

2. **Entrar a la carpeta del proyecto**
   ```bash
   cd Project-DesarrolloWeb
   ```

3. **Instalar dependencias**  
   (esto descargará React Router, React Hook Form, Firebase, etc. automáticamente)
   ```bash
   npm install
   ```

4. **Iniciar el servidor de desarrollo**
   ```bash
   npm start
   ```

   > Se abrirá una ventana en tu navegador en `http://localhost:3000` mostrando la aplicación.

---

## ⚙️ Variables de entorno

El proyecto utiliza **Firebase**. Para conectarse correctamente se necesita un archivo `.env` en la raíz con las credenciales de Firebase:

```
REACT_APP_FIREBASE_API_KEY=AIzaSyCVhMl44pmPSv-G81GOKtgRvNtvovlswCs
REACT_APP_FIREBASE_AUTH_DOMAIN=proyectodw-31c83.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=proyectodw-31c83
REACT_APP_FIREBASE_STORAGE_BUCKET=proyectodw-31c83.firebasestorage.app  
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=679056837157
REACT_APP_FIREBASE_APP_ID=1:679056837157:web:b4618ecf8629c9c6798dcc
```

> ⚠️ Este archivo `.env` **no se suele subir a GitHub** por seguridad. Cada usuario deberia de tener sus propias credenciales de firebase.

---

## 🌐 Despliegue

El proyecto está desplegado en [Vercel](https://vercel.com/).
Aun asi se puede acceder desde mi proyecto de vercel: [VercelProject](https://proyecto-three-navy.vercel.app/).
Para desplegarlo manualmente en tu propia cuenta:

1. Crear un proyecto en [Vercel](https://vercel.com/).
2. Conectar el repositorio de GitHub.
3. Configurar las variables de entorno en **Settings → Environment Variables**.
4. Vercel detectará automáticamente que es un proyecto de **React** y hará el build.

---

## 📚 Tecnologías usadas

El proyecto utiliza las siguientes librerías y frameworks:

- **React** (`react`, `react-dom`)  
- **React Router DOM** (`react-router-dom`)  
- **React Hook Form** (`react-hook-form`)  
- **Firebase** (`firebase`)  
- **Bootstrap** (`bootstrap`)  
- **React Bootstrap** (`react-bootstrap`) Aunque utilizo los CDN del css y de los iconos de bootstrap
- **React Hot Toast** (`react-hot-toast`)  

Además de **Vercel** como plataforma de despliegue.

## 👤 Autor
- **Agustin Lamas**  
