import { useState, useEffect } from "react";
import "./Header.css";
import logoU from "../assets/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);           // menú móvil
  const [scrolled, setScrolled] = useState(false);   // estilo al hacer scroll
  const [openItem, setOpenItem] = useState(null);    // submenú móvil
  const [openSubItem, setOpenSubItem] = useState(null); // sub-submenú móvil
  const [isCollapsed, setIsCollapsed] = useState(false); // nuevo estado para header colapsado

  useEffect(() => {
    const onScroll = () => {
      const shouldScroll = window.scrollY > 100;
      setScrolled(shouldScroll);
      setIsCollapsed(shouldScroll); // Colapsar header al hacer scroll
    };
    
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleHeader = () => {
    if (isCollapsed) {
      setIsCollapsed(false); // Expandir al hacer clic en el logo colapsado
    }
  };

  const handleLogoClick = (e) => {
    if (isCollapsed) {
      e.preventDefault(); // Prevenir navegación si está colapsado
      toggleHeader();
    }
    // Si no está colapsado, se comporta como enlace normal
  };

  const links = [
    { 
      name: "Servicios", 
      href: "#", 
      subLinks: [
        { name: "Ganado Rutas", href: "/servicios/ganado" },
        { name: "GAS RAS", href: "/servicios/gas-ras" },
        { name: "Dogado Autas", href: "/servicios/dogado" },
      ]
    },
    { name: "Flota", href: "/flota" },
    { name: "Rastreo", href: "/rastreo" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${isCollapsed ? "is-collapsed" : ""}`}>
      <nav className={`nav-shell ${open ? "menu-open" : ""}`}>
        {/* Marca - Modificado para manejar el clic cuando está colapsado */}
        <a 
          href="/" 
          className="brand"
          onClick={handleLogoClick}
        >
          <img src={logoU} alt="Ganado Rutas" />
          <span>GANADO RUTAS</span>
        </a>

        {/* Toggle móvil - Solo visible cuando NO está colapsado */}
        {!isCollapsed && (
          <button
            className={`hamburger ${open ? "active" : ""}`}
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        )}

        {/* Links - Ocultos cuando está colapsado */}
        {!isCollapsed && (
          <ul className="nav-list">
            {links.map((link, idx) => {
              const hasSub = !!link.subLinks;
              const isOpen = openItem === idx;

              return (
                <li
                  key={link.name}
                  className={`nav-item ${hasSub ? "has-sub" : ""} ${isOpen ? "open" : ""}`}
                  onMouseEnter={() => setOpenItem(idx)}
                  onMouseLeave={() => setOpenItem(null)}
                >
                  <button
                    className="nav-link"
                    onClick={() => setOpenItem(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{link.name}</span>
                    {hasSub && <i className="chev" aria-hidden="true" />}
                  </button>

                  {hasSub && (
                    <ul className="submenu" role="menu">
                      {link.subLinks.map((sub, sIdx) => {
                        const hasSubSub = !!sub.subSubLinks;
                        const isSubOpen = openSubItem === `${idx}-${sIdx}`;
                        return (
                          <li
                            key={sub.name}
                            className={`submenu-item ${hasSubSub ? "has-sub" : ""} ${isSubOpen ? "open" : ""}`}
                            onMouseEnter={() => setOpenSubItem(`${idx}-${sIdx}`)}
                            onMouseLeave={() => setOpenSubItem(null)}
                          >
                            <a 
                              className="submenu-link" 
                              href={sub.href || "#"} 
                              onClick={(e) => {
                                if (hasSubSub) e.preventDefault();
                                setOpenSubItem(isSubOpen ? null : `${idx}-${sIdx}`);
                              }}
                            >
                              <span>{sub.name}</span>
                              {hasSubSub && <i className="chev" aria-hidden="true" />}
                            </a>

                            {hasSubSub && (
                              <ul className="subsubmenu" role="menu">
                                {sub.subSubLinks.map((ss) => (
                                  <li key={ss.name}><a href={ss.href}>{ss.name}</a></li>
                                ))}
                              </ul>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        )}

        {/* CTA / Login - Oculto cuando está colapsado */}
        {!isCollapsed && (
          <div className="cta-zone">
            <a href="/login" className="btn-pill">Cuenta</a>
          </div>
        )}
      </nav>
    </header>
  );
}