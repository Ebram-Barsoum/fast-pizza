/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  getCart,
} from '../cart/cartSlice';
import Button from '../../ui/Button';

export default function ControlCartItem({ pizzaId }) {
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const inCart = cart.filter((item) => item.pizzaId === pizzaId);

  if (inCart.length === 0) return null;
  return (
    <div className="space-x-2">
      <Button
        type="small"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span>{inCart[0].quantity}</span>
      <Button
        type="small"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
      <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
        Delete
      </Button>
    </div>
  );
}
