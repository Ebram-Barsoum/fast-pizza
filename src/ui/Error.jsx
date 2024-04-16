import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

export default function Error() {
  const error = useRouteError();
  return (
    <div className="mx-auto p-5">
      <h2>Something Went Wrong 😢</h2>
      <p>⛔ {error.data || error.message}</p>
      <LinkButton to="-1">&larr;Go Back</LinkButton>
    </div>
  );
}
