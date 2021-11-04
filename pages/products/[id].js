import { getProduct, getAllProductsID } from '../../db/model';
import productStyles from '../../styles/product.module.css';
import Image from 'next/image';

export async function getStaticPaths() {
  const pathData = await getAllProductsID();
  const paths = pathData.map(({ id }) => {
    return {
      params: {
        id: id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const product = await getProduct(params.id);
  //   const productData = JSON.stringify(product);
  return {
    props: { product },
  };
}

export default function Product({ product }) {
  const colour = product.colour;
  const colours = JSON.parse(colour);

  return (
    <div>
      {/* className={productStyles.formCard}  */}
      <form action="/api/addToBasket" method="POST">
        {/* Title */}
        <h2>{product.title}</h2>
        {/* Image */}
        <div className={productStyles.productCard}>
          <Image
            key={`img${product.id}`}
            src={`${product.image}`}
            alt={product.title}
            width={200}
            height={200}
          />
          {/* Description */}
          <p>{product.description}</p>
        </div>
        {/* Category */}
        <p>{product.category}</p>
        {/* Size,  */}
        <label htmlFor="size">
          Size
          <select name="size" id="size">
            <option value={product.size}>{product.size}</option>
          </select>
        </label>
        <input type="hidden" value={product.price} name="price" />
        <input type="hidden" value={product.title} name="title" />
        <input type="hidden" value={product.image} name="image" />

        <label htmlFor="colour">
          Colour
          <select name="colour" id="colour">
            {colours.colour.map((colour) => {
              return (
                <option value={colour} key={colour}>
                  {colour}
                </option>
              );
            })}
          </select>
        </label>
        {/* // Price */}
        <p>£ {product.price}</p>
        {/* Quantitiy */}
        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          name="quantity"
          id="quantity"
          min={1}
          max={100}
          required
        />
        {/* // Button: Add-To-Basket */}
        <button type="submit">Add to Basket</button>
      </form>
    </div>
  );
}
