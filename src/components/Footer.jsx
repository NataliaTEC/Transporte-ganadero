import "./Footer.css";
import logoU from "../assets/logo.png";

export default function Footer(){
  const y = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="ft-brand">
          <a href="/" className="brand">
            <img src={logoU} alt="Ganado Rutas" />
            <span>GANADO RUTAS</span>
          </a>
          <p>Transporte de ganado confiable y seguro.</p>
        </div>

        <nav className="ft-nav">
          <div>
            <h4>Servicios</h4>
            <ul>
              <li><a href="/servicios/ganado">Ganado Rutas</a></li>
              <li><a href="/servicios/gas-ras">GAS RAS</a></li>
              <li><a href="/servicios/dogado">Dogado Autas</a></li>
            </ul>
          </div>
          <div>
            <h4>Compañía</h4>
            <ul>
              <li><a href="/flota">Flota</a></li>
              <li><a href="/rastreo">Rastreo</a></li>
              <li><a href="/sobreNosotros">Nosotros</a></li>
            </ul>
          </div>
          <div>
            <h4>Contacto</h4>
            <ul>
              <li><a href="tel:+50624304300">+506 2430 4300</a></li>
              <li><a href="mailto:contacto@ganitas.com">contacto@ganitas.com</a></li>
              <li>Costa Rica</li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="footer-bar">
        <p>© {y} Ganado Rutas</p>
        <ul>
          <li><a href="#">Términos</a></li>
          <li><a href="#">Privacidad</a></li>
          <li><a href="#">Cookies</a></li>
        </ul>
      </div>
    </footer>
  );
}
