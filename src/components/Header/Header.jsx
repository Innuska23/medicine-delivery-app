import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = () => {
  const isActive = (match) => {
    return match !== null;
  };

  return (
    <header className={s.header}>
      <nav className={s.headerNav}>
        <ul className={s.headerList}>
          <li className={s.headerItem}>
            <NavLink
              to="/shop"
              className={({ isActive }) => (isActive ? s.active : "")}
              isActive={isActive}
            >
              <span>Shop</span>
            </NavLink>
          </li>
          <li>
            <span>|</span>
          </li>
          <li className={s.headerItem}>
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? s.active : "")}
              isActive={isActive}
            >
              <span>Shopping Cart</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
