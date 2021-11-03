// Need to import anything?
import Product from './Product.js';
import productStyles from '../styles/product.module.css';

export default function ProductList({ productsArray }) {
  return (
    <div className={productStyles.grid}>
      {productsArray.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
