import "./catalog.css";
import CoffeeCard from "../CoffeeCard";
import { coffees } from "../data/Coffees";
function Catalog() {
  return (
    <>
      <section className="catalog-hero">
        <div className="hero-content">
          <h1>Наш каталог кофе</h1>
          <p>Выберите свой идеальный вкус из более чем 50 сортов</p>
        </div>
      </section>

      <section className="container">
        <div className="product-category">
          <h2 className="category-title">Сорта</h2>
          <div className="products">
            {coffees.map((coffee) => (
              <CoffeeCard coffee={coffee}></CoffeeCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default Catalog;
