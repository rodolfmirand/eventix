import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../features/auth/AuthContext";

export function Header() {
  const navigate = useNavigate();
  const { isAuthenticated, logout, user } = useAuth();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink to="/eventos" className="brand" aria-label="Ir para eventos">
          <span className="brand__mark">E</span>
          <span className="brand__name">Eventix</span>
        </NavLink>

        <nav className="main-nav" aria-label="Navegacao principal">
          <NavLink
            to="/eventos"
            className={({ isActive }) =>
              isActive ? "main-nav__link main-nav__link--active" : "main-nav__link"
            }
          >
            Eventos
          </NavLink>
          {isAuthenticated ? (
            <>
              <NavLink
                to="/perfil"
                className={({ isActive }) =>
                  isActive ? "main-nav__link main-nav__link--active" : "main-nav__link"
                }
              >
                Perfil
              </NavLink>
              <span className="main-nav__user" title={user?.email}>
                {user?.name}
              </span>
              <button className="main-nav__button" onClick={handleLogout} type="button">
                Sair
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "main-nav__link main-nav__link--active" : "main-nav__link"
              }
            >
              Entrar
            </NavLink>
          )}
        </nav>
      </div>
    </header>
  );
}
