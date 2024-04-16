/* eslint-disable no-unused-vars */
import { formatCurrency } from '../../utilities/helpers';

/* eslint-disable react/prop-types */
export default function OrderItem({ item, ingredients, isLoadingIngredients }) {
  const { name, quantity, totalPrice } = item;
  // console.log(item);
  return (
    <li className="flex items-center justify-between border-b-2 border-stone-100  p-4 text-sm">
      <div className="space-y-2">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="text-sm capitalize italic text-stone-400">
          {isLoadingIngredients ? 'loading ...' : ingredients?.join(', ')}
        </p>
      </div>

      <div className="font-bold">{formatCurrency(totalPrice)}</div>
    </li>
  );
}
