import React from "react";
import Logo from "../../images/Logo-proyect.png";
import { Link } from "react-router-dom";

const navbarStyle = {
    navbar: {
        backgroundColor: "#f6f3f3ff", // fondo blanco
        padding: "10px 20px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        display: "flex",
        justifyContent: "space-between",
        alingItems: "center"
    },
    link: {
        color: "#0B3D91", // azul oscuro
        fontSize: "20px",
    }
};

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg" style={navbarStyle.navbar}>
            <div className="container-fluid">
                <Link to={"/"} className="navbar-brand">
                    <img src={Logo} alt="Logo" width={120}/>

                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item m-3" >
                            <Link className="nav-link" to={"/"} style={navbarStyle.link}>Inicio</Link>
                        </li>
                        <li className="nav-item m-3">
                            <Link className="nav-link" to={"/Productos"} style={navbarStyle.link}>Productos</Link>
                        </li>
                        <li className="nav-item m-3">
                            <Link className="nav-link" to={"/Contact"} style={navbarStyle.link}>Contacto</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;


