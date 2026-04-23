import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/eventos", label: "Eventos" },
  { to: "/perfil", label: "Perfil" },
  { to: "/login", label: "Entrar" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink to="/eventos" className="brand" aria-label="Ir para eventos">
          <span className="brand__mark">E</span>
          <span className="brand__name">Eventix</span>
        </NavLink>

        <nav className="main-nav" aria-label="Navegacao principal">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? "main-nav__link main-nav__link--active" : "main-nav__link"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
