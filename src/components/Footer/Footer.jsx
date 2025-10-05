import React from "react";
import { Link } from "react-router-dom";

const footerStyle = {
    footer: {
        backgroundColor: "#ffffffff", 
        color: "#1e2be0ff",
        padding: "40px 20px",
        marginTop: "50px",
        display: "flex",
        justifyContent: "space-between"
    },
    container: {
        borderRight: "2px solid white",
        margin: "16px 0px",
    },
    link: {
        color: "#0d206eff",
        textDecoration: "none",
        display: "block",
        marginBottom: "8px"
    },
    socialIcon: {
        fontSize: "3rem",
        padding: "0x 10px",
        color: "#0d206eff",
    }
};

function Footer() {
    return (
        <footer style={footerStyle.footer}>
            <div className="container">
                <div className="row">
                    {/* Sobre la empresa */}
                    <div className="col-md-4 mb-3" style={footerStyle.container}>
                        <h3>Sobre Nosotros</h3>
                        <p>
                            Somos una empresa de tecnología dedicada a ofrecer soluciones innovadoras y confiables para nuestros clientes.
                        </p>
                    </div>

                    {/* Contactanos */}
                    <div className="col-md-4 mb-3" style={footerStyle.container}>
                        <h3>Contáctanos</h3>
                        <a href="tel:+1234567890" style={footerStyle.link}>Teléfono: +1 234 567 890</a>
                        <a href="mailto:info@empresa.com" style={footerStyle.link}>Correo: info@empresa.com</a>
                        <a href="#" style={footerStyle.link}>Dirección: Calle Falsa 123</a>
                    </div>

                    {/* Redes sociales */}
                    <div className="col-md-4 mb-3 text-center" style={footerStyle.container}>
                    <h3 style={footerStyle.title}>Redes Sociales</h3>
                    <Link style={footerStyle.socialIcon} to={"#"}><i className="bi bi-whatsapp m-3"></i></Link>
                    <Link style={footerStyle.socialIcon} to={"#"}><i className="bi bi-facebook m-3"></i></Link>
                    <Link style={footerStyle.socialIcon} to={"#"}><i className="bi bi-instagram m-3"></i></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

