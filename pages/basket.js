import ShoppingBasket from '../components/ShoppingBasket';
import { getMyBasket, getSession } from '../db/model';
import Cookies from 'cookies';

export async function getServerSideProps({ req, res }) {
  const cookies = new Cookies(req, res);

  if (!cookies.get('sid')) {
    return {
      props: {
        session: false,
      },
    };
  }

  const sid = cookies.get('sid');
  const data = await getSession(sid);
  const basket = await getMyBasket(data.id);
  const basketData = JSON.stringify(basket);
  return {
    props: {
      session: true,
      data,
      sid,
      basketData,
    },
  };
}

const Basket = ({ session, data, sid, basketData }) => {
  if (!session)
    return (
      <>
        <h1>Login please</h1>
      </>
    );

  return (
    <>
      <h1>
        Your shopping <ShoppingBasket basketData={basketData} key={1} /> basket
      </h1>
    </>
  );
};

export default Basket;
