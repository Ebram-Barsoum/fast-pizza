/* eslint-disable no-unused-vars */
import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';
export default function UpdateOrder() {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH">
      <Button type="primary">make priority</Button>
    </fetcher.Form>
  );
}

export async function action({ request, params }) {
  const { orderId } = params;
  const data = { priority: true };

  await updateOrder(orderId, data);
  return null;
}
