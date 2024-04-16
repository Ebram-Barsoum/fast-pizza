/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';

export default function UserName() {
  const userName = useSelector(store => store.user.userName);
  if (!userName) return null;

  return <div className="text-semibold hidden sm:block">{userName}</div>;
}
