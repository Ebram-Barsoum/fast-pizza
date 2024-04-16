/* eslint-disable no-unused-vars */
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCart, clearCart, getTotalCartPrice } from '../cart/cartSlice';
import { fetchAddress } from '../user/userSlice';
import { createOrder } from '../../services/apiRestaurant';
import Button from '../../ui/Button';
import store from '../../store';
import { useState } from 'react';
import { formatCurrency } from '../../utilities/helpers';

const isValidPhone = (data) => {
  return /^(01)[0-25][0-9]{8}/.test(data);
};

export default function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const formErrors = useActionData();

  const {
    userName,
    status: addresStatus,
    address,
    position,
    error: errorAddress,
  } = useSelector((store) => store.user);
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);

  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  const dispatch = useDispatch();
  const isLoadingAddress = addresStatus === 'loading';

  return (
    <div className="mx-auto mt-8 px-2 py-10 sm:w-4/5 sm:px-4 md:w-3/5 lg:w-2/5">
      <h2 className="mb-5 text-center text-lg font-bold text-lime-700 sm:text-2xl">
        Ready to order ? let&#39;s go
      </h2>

      <Form
        method="POST"
        className="space-y-3 rounded-lg bg-stone-100/50 px-4 py-6 drop-shadow-sm"
      >
        <div className="space-y-2 sm:flex sm:items-center sm:gap-3 sm:space-y-0">
          <label htmlFor="name" className=" sm:basis-28">
            First Name
          </label>
          <div className="flex-grow">
            <input
              type="text"
              id="name"
              name="customer"
              required
              className="input "
              defaultValue={userName}
            />
          </div>
        </div>

        <div className="space-y-2 sm:flex sm:items-center sm:gap-3 sm:space-y-0">
          <label htmlFor="phone" className=" sm:basis-28">
            Phone number
          </label>
          <div className="flex-grow space-y-3">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="ex: 01021313721"
              required
              className="input"
            />
            {formErrors?.phone && (
              <p className="mt-2 rounded-md bg-red-50 text-xs text-red-700">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2 sm:flex sm:items-center sm:gap-3 sm:space-y-0">
          <label htmlFor="address" className=" sm:basis-28">
            Address
          </label>
          <div className="relative flex-grow">
            <input
              type="text"
              id="address"
              name="address"
              required
              className="input "
              defaultValue={address}
              disabled={isLoadingAddress}
            />
            {address === '' && (
              <span className=" absolute right-1 top-1 ">
                <Button
                  type="small"
                  disabled={isLoadingAddress}
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(fetchAddress());
                  }}
                >
                  get location
                </Button>
              </span>
            )}

            {addresStatus === 'error' && (
              <p className="mt-1 rounded-md bg-red-100 px-2 text-xs text-red-600">
                {errorAddress}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
            id="priority"
            name="priority"
            className="h-5 w-5 accent-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-600 focus:ring-offset-2"
          />
          <label htmlFor="priority" className="text-sm">
            You want to give your order priority?
          </label>
        </div>
        <div className="pt-3">
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            type="hidden"
            name="position"
            value={`${position ? `${position.latitude}, ${position.longitude}` : ''}`}
          />
          <Button
            disabled={isSubmitting || isLoadingAddress || cart.length === 0}
            type="primary"
          >
            {isSubmitting
              ? 'Ordering...'
              : `Order Now for ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'true',
  };

  console.log(order);

  // in case there is an issue with the phone number
  const errors = {};
  if (!isValidPhone(order.phone)) {
    errors.phone =
      'Please enter a valid phone number, We might need to contact you.';
  }
  if (Object.keys(errors).length > 0) return errors;

  // in case  everything is okey.
  const newOrder = await createOrder(order);
  store.dispatch(clearCart());

  return redirect(`/fast-pizza/order/${newOrder.id}`);
}

// KOUVWO
// IIDSAT
// ZN22JB
