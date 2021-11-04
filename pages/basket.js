import ShoppingBasket from '../components/ShoppingBasket';
import { getMyBasket } from '../db/model';

export async function getServerSideProps() {
  const user_id = 1; //find from session
  const basket = await getMyBasket(user_id);
  const basketData = JSON.stringify(basket);
  return {
    props: { basketData },
  };
}

const Basket = ({ basketData }) => {
  return (
    <>
      <h1>Your shopping basket</h1>
      <ShoppingBasket basketData={basketData} key={1} />
    </>
  );
};

export default Basket;
