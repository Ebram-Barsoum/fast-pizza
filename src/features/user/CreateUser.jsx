/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Button from '../../ui/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateName } from './userSlice';

export default function CreateUser() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim('')) return;

    dispatch(updateName(name));
    navigate('/fast-pizza/menu');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" mx-auto  w-4/5 px-2 sm:w-3/5 sm:px-0 md:w-2/5 xl:w-[22rem]"
    >
      <p className="mb-4 text-sm text-white sm:text-base">
        👋 Welcome! Please start by telling us your name :
      </p>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input mb-4"
      />
      <div>{name !== '' && <Button type="primary">Start ordering</Button>}</div>
    </form>
  );
}
