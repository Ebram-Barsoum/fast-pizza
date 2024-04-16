/* eslint-disable react/prop-types */
import { Link, useNavigate } from 'react-router-dom';

export default function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const style = ' text-sky-500 transition hover:text-sky-700';
  if (to === '-1') {
    return (
      <button className={style} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  }

  return (
    <Link to={to} className={style}>
      {children}
    </Link>
  );
}
