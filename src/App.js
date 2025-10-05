import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
//Importacion de los componentes
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
//Importacion de las paginas
import Home from './pages/Home/Home';
import Productos from './pages/Productos/Productos';
import Contact from './pages/Contact/Contact';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductCreate from './pages/ProductCreate/ProductCreate';

function App() {
    return (
      <div className="App">
          <Navbar/>

          <Routes>
            <Route path='/' element={<Home />} /> 
            <Route path='/Productos' element={<Productos/>}/>
            <Route path='/Contact' element={<Contact />} />
            <Route path="/Producto/:id" element={<ProductDetail />} />
            <Route path="/Productos/nuevo" element={<ProductCreate />} />

            {/* Productos por ID */}
            

          </Routes>

          <Footer />
      </div>

    );
  }

export default App;
