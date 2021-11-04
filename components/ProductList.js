// Need to import anything?
import Product from './Product.js';
import productStyles from '../styles/product.module.css';

export default function ProductList({ productsArray, category }) {
  return (
    <div className={productStyles.grid}>
      {productsArray
        // .filter(dish => dish.price >= min && dish.price <= max)
        .filter(
          (product) => category === 'All' || product.category_name === category
        )
        .map((product) => (
          <Product key={product.id} product={product} />
        ))}
    </div>
  );
}
