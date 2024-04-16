/* eslint-disable no-unused-vars */
import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import Loader from './Loader/Loader';

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  // console.log(isLoading);

  return (
    <div className=" grid h-screen grid-rows-[auto_1fr_auto] selection:bg-lime-100 selection:text-lime-700">
      {isLoading && <Loader />}

      <Header />
      <main className=" overflow-y-auto">
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}
