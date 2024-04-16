/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getCart } from '../cart/cartSlice';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utilities/helpers';
import ControlCartItem from '../cart/ControlCartItem';

export default function MenuItem({ pizza }) {
  const { id, imageUrl, name, ingredients, soldOut, unitPrice } = pizza;

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice,
    };

    dispatch(addItem(newItem));
  };

  const cart = useSelector(getCart);
  const inCart = cart.filter((item) => item.pizzaId === id);

  return (
    <li className="flex w-full gap-x-3 overflow-hidden rounded-lg bg-lime-50 drop-shadow-md sm:flex-col">
      <img
        src={imageUrl}
        alt={name}
        className={`sm:h-50 h-auto w-28 sm:w-full ${soldOut && 'grayscale'}`}
      />
      <div className="flex flex-grow flex-col p-2">
        <p className="fontsemibold text-lime-700">{name}</p>
        <p className="text-xs sm:text-sm capitalize sm:mb-3">{ingredients.join(', ')}</p>

        <div className="mt-auto flex flex-wrap items-center justify-between justify-self-end">
          <p className=" text-sm">
            {soldOut ? 'SOLD OUT' : formatCurrency(unitPrice)}{' '}
          </p>

          <div className=" space-x-2">
            <ControlCartItem pizzaId={id} />
            {!soldOut && !inCart.length && (
              <Button type="small" onClick={handleAddToCart}>
                Add to cart
                <i className="fa-solid fa-cart-plus mr-1 text-base"></i>
              </Button>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}
