import '../styles/Footer.css'

export function Footer() {
    return (
        <footer>
            <div className="info-enterprice">
                <img src="/logo-idat.png" alt="" />
                <div className="info-enterprice-text">
                    <strong>Oficina Principal</strong>
                    <span>Av. Lima del Perú 1234</span>

                    <strong>Rason Social: </strong>
                    <span>IDAT SAC</span>

                    <strong>RUC</strong>
                    <span>20605391738</span>
                </div>
                <div className="info-enterprice-links">
                    <a href="/temps">Terminos y condiciones</a>
                    <a href="/works">Trabaja con nosotros</a>
                    <a href="/cookies">Politca de cookies</a>
                    <a href="/promotions">Promociones</a>
                    <a href="/contact">Contactenos</a>
                </div>
                <div className="info-enterprice-social">
                    <span>Siguenos:</span>
                    <a href="https://www.facebook.com/IDATPeru" target="_blank" rel="noopener noreferrer">
                        <img src="/img/facebook.png" alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com/idatperu/" target="_blank" rel="noopener noreferrer">
                        <img src="/img/instagram.png" alt="Instagram" />
                    </a>
                    <a href="https://www.youtube.com/@idatperu" target="_blank" rel="noopener noreferrer">
                        <img src="/img/youtube.png" alt="YouTube" />
                    </a>
                </div>
            </div>
            <div className="info-copyright">
                <p>© Todos los derechos reservados por CINE IDAT - 2025</p>
            </div>
        </footer>
    )
}