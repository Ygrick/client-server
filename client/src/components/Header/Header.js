import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = ({ isLoggedIn, setIsLoggedIn, userName, setIsAdmin }) => {
  const handleLogOut = () => {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('userName')
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  return (
    isLoggedIn ?
      <header className={styles.mainHeader}>
        {
          <nav>
            Добро пожаловать, &nbsp;<strong>{userName}</strong> &nbsp; |

            <NavLink
              onClick={handleLogOut}
              exact
              to="/login"
            >
              Выход
            </NavLink>
          </nav>
        }
      </header>
    : ''
  );
};
