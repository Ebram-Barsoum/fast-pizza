import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { formatCurrency } from '../../utilities/helpers';
import { getTotalCartItems, getTotalCartPrice } from './cartSlice';
export default function CartOverview() {
  const totalItems = useSelector(getTotalCartItems);
  const totalPrice = useSelector(getTotalCartPrice);

  if (!totalItems) return null;

  return (
    <div className="flex items-center justify-between bg-stone-700 p-4 text-sm uppercase text-lime-50 md:text-base">
      <p className=" space-x-3">
        <span>{totalItems} PIZZAs</span>
        <span>{formatCurrency(totalPrice)} </span>
      </p>
      <Link to="/fast-pizza/cart">
        <i className="fa-solid fa-cart-plus mr-1 text-base"></i> Open Cart
      </Link>
    </div>
  );
}
