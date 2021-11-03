import React from 'react';

const Basket = () => {
  return (
    <>
      <h1>Your shopping basket</h1>
      <form action="api/basket" method="POST">
        {/* - List all products here (model method for getting basket)
- Delete button linked to model method */}
        <button type="submit">Add to Basket</button>
      </form>
    </>
  );
};

export default Basket;
