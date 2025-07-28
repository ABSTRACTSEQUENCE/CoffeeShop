import { Link } from "react-router";
import "./header.css";
import { CAFFEE_NAME_ENG } from "../globalVars";
import { useContext } from "react";
import { CartProps } from "../App";
function Header() {
  const { cartCount } = useContext(CartProps);
  return (
    <header>
      <section className="container header-content">
        <figure className="logo" aria-label="Логотип с кофе">
          <i className="fas fa-coffee"></i>
          <span>{CAFFEE_NAME_ENG}</span>
        </figure>
        <nav role="navigation">
          <ul>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/catalog">Каталог</Link>
            </li>
            <li>
              <Link to="/about">О нас</Link>
            </li>
            <li>
              <Link to="/contacts">Контакты</Link>
            </li>
            <li>
              <figure className="cart-icon" aria-label="Иконка корзины">
                <i className="fas fa-shopping-cart"></i>
                <data value={cartCount} className="cart-count" key={cartCount}>
                  {cartCount}
                </data>
              </figure>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}
export default Header;
