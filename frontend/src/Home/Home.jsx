import "./home.css";
import { Link } from "react-router";
import CoffeeCard from "../CoffeeCard";
import { coffees } from "../data/Coffees";
import { Customers } from "../data/Customers";
import { PeopleCard } from "../PeopleCard";
import { CAFFEE_NAME_RUS } from "../globalVars";
function Home() {
  return (
    <div id="main-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Премиальный кофе с лучших плантаций мира</h1>
          <p>
            Откройте для себя уникальные вкусы и ароматы нашего тщательно
            отобранного кофе
          </p>
          <Link to="/catalog" className="bt">
            В каталог
          </Link>
        </div>
      </section>

      <section className="container">
        <h2 className="section-title">Наши хиты</h2>
        <div className="products">
          {coffees.map((coffee) => (
            <CoffeeCard coffee={coffee}></CoffeeCard>
          ))}
        </div>
      </section>

      <section className="about">
        <div className="container about-content">
          <div className="about-text">
            <h2>Наша история</h2>
            <p>
              {CAFFEE_NAME_RUS} начал свой путь в 2010 году с маленькой
              обжарочной в центре Москвы. Сегодня мы работаем напрямую с
              фермерами из 15 стран мира, чтобы предложить вам лучшие сорта
              кофе.
            </p>
            <p>
              Мы тщательно контролируем каждый этап: от сбора урожая до обжарки,
              чтобы в вашей чашке оказался кофе с идеально раскрытым вкусом и
              ароматом.
            </p>
            <Link to="/about" className="bt">
              Узнать больше
            </Link>
          </div>
          <div className="about-image">
            <img src="./public/People/Ken and Tokua.jpg" alt="" />
          </div>
        </div>
      </section>
      <section className="container testimonials">
        <h2 className="section-title">Отзывы наших клиентов</h2>
        <div className="testimonial-section">
          {Customers.map((dude) => (
            <PeopleCard human={dude}></PeopleCard>
          ))}
        </div>
      </section>
    </div>
  );
}
export default Home;
