import { NavLink } from "react-router-dom";

import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <nav className={s.headerNav}>
        <ul className={s.headerList}>
          <li className={s.headerItem}>
            <NavLink
              to="/medicine-delivery-app/shop"
              className={({ isActive }) => (isActive ? s.active : "")}
            >
              <span>Shop</span>
            </NavLink>
          </li>
          <li>
            <span>|</span>
          </li>
          <li className={s.headerItem}>
            <NavLink
              to="/medicine-delivery-app/cart"
              className={({ isActive }) => (isActive ? s.active : "")}
            >
              <span>Shopping Cart</span>
            </NavLink>
          </li>
        </ul>
        <p className={s.headerTitle}>Medicine Delivery App</p>
      </nav>
    </header>
  );
};

export default Header;
