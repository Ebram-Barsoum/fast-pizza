/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import LinkButton from '../../ui/LinkButton';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';
import { clearCart, getCart } from './cartSlice';
import emptyCart from '../../../public/emptyCart.jpg';

export default function Cart() {
  const navigate = useNavigate();
  const cart = useSelector(getCart);
  const userName = useSelector((store) => store.user.userName);

  const dispatch = useDispatch();

  const handleClick = () => {
    navigate('/fast-pizza/order/new');
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="mx-auto w-full p-6 sm:w-3/5">
      <LinkButton to="/fast-pizza/menu">&larr; Back to Menu </LinkButton>
      <h2 className="flex-  mt-4 items-center text-xl font-semibold text-lime-700">
        <i className="fa-solid fa-cart-plus mr-1 text-2xl"></i>
        <span> Your cart, {userName}</span>
      </h2>

      {!cart.length ? (
        <img
          src={emptyCart}
          alt="empty shopping cart image"
          className="mx-auto sm:w-2/3"
        />
      ) : (
        <>
          <ul className="my-7 divide-y divide-stone-200 border-b  pt-4">
            {cart.map((item) => (
              <CartItem item={item} key={item.pizzaId} />
            ))}
          </ul>
          <div className="space-x-3">
            <Button onClick={handleClick} type="primary">
              Order Pizza
            </Button>
            <Button type="secondary" onClick={handleClearCart}>
              Clear Cart
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
