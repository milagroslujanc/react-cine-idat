import "../styles/Footer.css";
import facebook from "./img/facebook.png";
import instagram from "./img/instagram.png";
import youtube from "./img/youtube.png";


export function Footer() {
  return (
    <footer>
      <div className="info-enterprice">
        <div>
          <img src="/logo-idat.png" alt="" width={180}/>
        </div>
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
          <a
            href="https://www.facebook.com/IDATPeru"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="Facebook" width={50} height={50} />Facebook
          </a>
          <a
            href="https://www.instagram.com/idatperu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="Instagram" width={40} height={40}  />Instagram
          </a>
          <a
            href="https://www.youtube.com/@idatperu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtube} alt="YouTube" width={40} height={25}  />YouTube
          </a>
        </div>
      </div>
      <div className="info-copyright">
        <p>© Todos los derechos reservados por CINE IDAT - 2025</p>
      </div>
    </footer>
  );
}
