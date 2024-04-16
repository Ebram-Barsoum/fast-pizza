import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import UserName from '../features/user/UserName';

export default function Header() {
  return (
    <div className="border-b-2  border-stone-700 bg-lime-700 ">
      <div className="mx-auto flex w-full items-center justify-between px-2  py-3 text-lg uppercase text-lime-50 sm:w-4/5 sm:px-5">
        <Link to="/fast-pizza" className="text-xl font-bold tracking-wide">
          Fast pizza
        </Link>
        <SearchOrder />
        <UserName />
      </div>
    </div>
  );
}
