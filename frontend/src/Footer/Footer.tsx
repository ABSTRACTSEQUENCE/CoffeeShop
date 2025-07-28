import "./footer.css"
import {CAFFEE_NAME_ENG, CAFFEE_NAME_RUS} from "../globalVars"
import { Link } from "react-router"
function Footer(){
    return(
      <>
        <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>{CAFFEE_NAME_RUS}</h3>
            <p>
              Премиальный кофе с лучших плантаций мира. Свежая обжарка каждую
              неделю.
            </p>
            <div className="social-links">
              <Link to ="https://web.telegram.org"><i className="fab fa-telegram"></i></Link>
              <Link to ="https://vk.com"><i className="fab fa-vk"></i></Link>
            </div>
          </div>
          <div className="footer-column">
            <h3>Меню</h3>
            <ul>
              <li><Link to ="/">Главная</Link></li>
              <li><Link to ="/catalog">Каталог</Link></li>
              <li><Link to ="/about">О нас</Link></li>
              <li><Link to ="/contacts">Контакты</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Информация</h3>
            <ul>
              <li><Link to ="/delivery">Доставка и оплата</Link></li>
              <li><Link to ="/refund">Возврат и обмен</Link></li>
              <li><Link to ="/public-offer">Публичная оферта</Link></li>
              <li><Link to ="/privacy-policy">Политика конфиденциальности</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Контакты</h3>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i> Москва, ул. Кофейная, 15
              </li>
              <li><i className="fas fa-phone"></i> +7 (495) 123-45-67</li>
              <li><i className="fas fa-envelope"></i> info@{CAFFEE_NAME_ENG.toLowerCase()}.com</li>
              <li><i className="fas fa-clock"></i> Пн-Пт: 9:00-23:30</li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2025 {CAFFEE_NAME_RUS}. Все права защищены.</p>
        </div>
      </div>
    </footer>
    </>
    )
}
export default Footer