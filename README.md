Proyecto-DesarrolloWeb
Este proyecto es una aplicación web desarrollada en React , con base de datos en Firebase y desplegada en Vercel .

🚀 Requisitos previos
Antes de empezar, asegúrese de tener instalado:

Node.js (incluye npm)
Git
📥 Instalación y ejecución en local
Clonar el repositorio

git clone https://github.com/Daniiel24w/Project-DesarrolloWeb
Entrar a la carpeta del proyecto

cd Project-DesarrolloWeb
Instalar dependencias
(esto descargará React Router, React Hook Form, Firebase, etc. automáticamente)

npm install
Iniciar el servidor de desarrollo

npm start
Se abrirá una ventana en tu navegador http://localhost:3000mostrando la aplicación.

⚙️ Variables de entorno
El proyecto utiliza Firebase . Para conectarse correctamente se necesita un archivo .enven la raíz con las credenciales de Firebase:

REACT_APP_FIREBASE_API_KEY=AIzaSyCVhMl44pmPSv-G81GOKtgRvNtvovlswCs
REACT_APP_FIREBASE_AUTH_DOMAIN=proyectodw-31c83.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=proyectodw-31c83
REACT_APP_FIREBASE_STORAGE_BUCKET=proyectodw-31c83.firebasestorage.app  
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=679056837157
REACT_APP_FIREBASE_APP_ID=1:679056837157:web:b4618ecf8629c9c6798dcc
⚠️Este archivo .env no se suele subir a GitHub por seguridad. Cada usuario deberia de tener sus propias credenciales de firebase.

🌐 Despliegue
El proyecto está desplegado en Vercel . Aún así se puede acceder desde mi proyecto de vercel: VercelProject . Para implementarlo manualmente en tu propia cuenta:

Crear un proyecto en Vercel .
Conecte el repositorio de GitHub.
Configurar las variables de entorno en Configuración → Variables de entorno .
Vercel detectará automáticamente que es un proyecto de React y hará el build.
📚 Tecnologías usadas
El proyecto utiliza las siguientes librerías y frameworks:

Reaccionar ( react, react-dom)
DOM del enrutador React ( react-router-dom)
Formulario de gancho de React ( react-hook-form)
Firebase ( firebase)
Bootstrap ( bootstrap)
React Bootstrap ( react-bootstrap) Aunque utilizo los CDN del css y de los iconos de bootstrap
Reaccionar Tostada Caliente ( react-hot-toast)
Además de Vercel como plataforma de despliegue.

👤 Autor
Agustin Lamas
