import React from 'react';

const Basket = () => {
  return (
    <>
      <h1>Your shopping basket</h1>
      <form action="api/basket" method="POST">
        {/* PRODUCT_TITLE, ID */}
        <input name="user_id" value="1" />
        <input name="product_title" value="CUSHION" />
        <input name="product_colour" value="RED" />
        <input name="product_size" value="LARGE" />
        <input name="product_price" value="100" />

        <button type="submit">Add to Basket</button>
      </form>
    </>
  );
};

export default Basket;
