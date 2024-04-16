import { useNavigate } from 'react-router-dom';
import CreateUser from '../features/user/CreateUser';
import img from '../assets/home-img.png';
import { useSelector } from 'react-redux';
import Button from './Button';

export default function Home() {
  const userName = useSelector((store) => store.user.userName);

  const navigate = useNavigate();

  const toMenu = () => {
    navigate('/fast-pizza/menu');
  };

  return (
    <div className=" home  h-[100%] bg-cover bg-center text-center">
      <img
        src={img}
        alt="chicken pizza image"
        className=" m-auto w-1/2 hover:animate-spin-slow sm:w-1/5"
      />
      <h1 className=" mb-8 text-2xl font-semibold text-lime-400 sm:text-3xl">
        <p className="mb-3 text-stone-100"> The Best Pizza Ever</p>
        Straight out of the oven, straight to you.
      </h1>
      {!userName ? (
        <CreateUser />
      ) : (
        <Button onClick={toMenu} type="primary">
          continue ordering, {userName}
        </Button>
      )}{' '}
    </div>
  );
}
