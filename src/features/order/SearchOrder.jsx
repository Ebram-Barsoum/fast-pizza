import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query) return;

    navigate(`order/${query}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="mx-auto w-28 rounded-full bg-lime-50 px-2 py-1 text-sm text-stone-600 transition-all placeholder:text-stone-400 focus:w-40 focus:outline-none focus:ring focus:ring-lime-300 focus:ring-offset-2 sm:w-52 sm:px-3 sm:py-2 sm:focus:w-72"
        placeholder="Search for order..."
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}
