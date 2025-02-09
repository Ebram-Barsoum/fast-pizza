import style from './Loader.module.css';
export default function Loader() {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center bg-slate-200/20 text-lime-700 backdrop-blur-sm">
      <span className={style.loader}></span>
    </div>
  );
}
