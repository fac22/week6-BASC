// import Image from 'next/image';

export default function ShoppingBasket({ basketData }) {
  const basketArr = JSON.parse(basketData);
  return (
    <div>
      <ul>
        {basketArr.map((entry) => {
          return (
            <li key={entry.id}>
              <h3>Title: {entry.basket_object.title}</h3>
              <p>Colour: {entry.basket_object.colour}</p>
              <p>Size: {entry.basket_object.size}</p>
              {/* <Image
                key={entry.id}
                src={`${entry.basket_object.image}`}
                alt={entry.basket_object.title}
                width={200}
                height={200}
              /> */}
              <p>Quantity: {entry.basket_object.quantity}</p>
              <p>
                £{' '}
                <span id={`price${entry.id}`}>{entry.basket_object.price}</span>
              </p>
            </li>
          );
        })}
      </ul>
      <p>Total Price</p>
    </div>
  );
}
