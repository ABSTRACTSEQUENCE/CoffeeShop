import ButtonAddToCart from "./ButtonAddToCart";
function CoffeeCard({ coffee }) {
  return (
    <article className="product-card">
      <figure className="product-image">
        <img src={coffee.imageURL} alt={coffee.name} loading="lazy" />
      </figure>
      <div className="product-info">
        <h3 className="product-title">{coffee.name}</h3>
        <p className="product-description">{coffee.description}</p>
        <data value={coffee.price} className="product-price">
          {coffee.price}р / 250г
        </data>
        <ButtonAddToCart />
      </div>
    </article>
  );
}
export default CoffeeCard;
