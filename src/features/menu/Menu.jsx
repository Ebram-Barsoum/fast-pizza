import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';

export default function Menu() {
  const menu = useLoaderData();
  //console.log(menu);
  return (
    <div className=" mx-auto w-full px-2 pb-5 pt-2 sm:w-4/5 ">
      <h2 className="mb-3 text-2xl font-bold uppercase text-lime-700">
        <i className="fa-solid fa-pizza-slice"></i> our menu
      </h2>
      <ul className=" grid grid-cols-1 justify-items-center gap-5    sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {menu.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </ul>
    </div>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}
