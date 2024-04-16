/* eslint-disable react/prop-types */
import { formatCurrency } from '../../utilities/helpers';
import ControlCartItem from './ControlCartItem';

export default function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="flex flex-wrap items-center justify-between gap-y-3 py-3 sm:block sm:space-y-2">
      <p>
        {quantity}&times; {name}
      </p>

      <div className="fontbold flex items-center justify-between gap-5 text-sm">
        <p>{formatCurrency(totalPrice)}</p>

        <div>
          <ControlCartItem pizzaId={pizzaId} />
        </div>
      </div>
    </li>
  );
}
