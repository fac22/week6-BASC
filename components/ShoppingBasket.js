import Image from 'next/image';

export default function ShoppingBasket({ basketData }) {
  const basketArr = JSON.parse(basketData);
  let total = 0;
  return (
    <div>
      <ul>
        {basketArr.map((entry) => {
          total +=
            parseFloat(entry.basket_object.price || 0) *
            parseFloat(entry.basket_object.quantity || 0);

          return (
            <li key={entry.id}>

              <form action="api/delete" method="POST">

              <h3>Title: {entry.basket_object.title}</h3>
              <p>Colour: {entry.basket_object.colour}</p>
              <p>Size: {entry.basket_object.size}</p>
              {entry.basket_object.image && (
                <Image

                  key={entry.id}
                  src={`${entry.basket_object.image}`}
                  alt={entry.basket_object.title}
                  width={200}
                  height={200}
                    />
              )}
              <p>Quantity: {entry.basket_object.quantity}</p>
              <p>
                £{' '}
                <span id={`price${entry.id}`}>{entry.basket_object.price}</span>
                  <input type="hidden" name="id" value={entry.id} /> 
                </p>
                <button type="submit">DELETE</button>
              </form>
            </li>
          );
        })}
      </ul>
      <p>Total Price:£{total.toFixed(2)}</p>
    </div>
  );
}
