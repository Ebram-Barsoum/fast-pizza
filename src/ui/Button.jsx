/* eslint-disable react/prop-types */
export default function Button({ children, disabled, onClick, type }) {
  const base =
    'inline-block px-3 py-2 text-sm sm:text-base rounded-full bg-lime-400 font-semibold uppercase tracking-wide transition hover:bg-lime-300 focus:outline-none focus:ring focus:ring-lime-300 focus:ring-offset-1 disabled:cursor-not-allowed ';
  const styles = {
    primary: base,
    small: base + ' text-xs sm:text-xs',
    secondary:
      base +
      ' px-3 py-2 bg-transparent text-stone-400 border-2 border-stone-200 hover:text-stone-700 hover:bg-stone-200 focus:border-none focus:ring-stone-200',
  };
  return (
    <button onClick={onClick} disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
