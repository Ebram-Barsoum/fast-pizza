import { useFetcher, useLoaderData } from 'react-router-dom';
import { getOrder } from '../../services/apiRestaurant';
import {
  formatCurrency,
  formatDate,
  getMinutesLeft,
} from '../../utilities/helpers';
import OrderItem from './OrderItem';
import { useEffect } from 'react';
import UpdateOrder from './UpdateOrder';

export default function Order() {
  const order = useLoaderData();
  // console.log(order);
  const fetcher = useFetcher();

  useEffect(() => {
    if (!fetcher.data && fetcher.state === 'idle') {
      fetcher.load('/fast-pizza/menu');
    }
  }, [fetcher]);

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = getMinutesLeft(estimatedDelivery);

  return (
    <div className="mx-auto w-full space-y-8 p-5 sm:w-4/5 md:w-3/5">
      <div className="flex flex-wrap items-center justify-between gap-y-3">
        <h2 className="text-2xl font-bold text-lime-700">Order #{id} Status</h2>

        <div className="space-x-3 ">
          {priority && (
            <span className="rounded-full bg-red-600 px-2 py-1 uppercase tracking-wide text-red-100">
              Priority
            </span>
          )}
          <span className="rounded-full bg-green-600 px-2 py-1 uppercase tracking-wide text-green-100">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-y-3 rounded-md bg-stone-200/50 p-5">
        <p>
          {deliveryIn >= 0
            ? `Only ${getMinutesLeft(estimatedDelivery)} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p className="text-sm text-stone-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul>
        {cart.map((item) => (
          <OrderItem
            item={item}
            key={item.id}
            isLoadingIngredients={fetcher.state === 'loading'}
            ingredients={
              fetcher?.data?.find((ele) => ele.id === item.pizzaId).ingredients
            }
          />
        ))}
      </ul>
      <div className="space-y-3 rounded-md bg-stone-200/50 p-5">
        <p className="text-sm font-medium">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-medium">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-bold ">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
      {!priority && <UpdateOrder order={ order} />}
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}
