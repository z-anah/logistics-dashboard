import DeliveryListTable from './components/DeliveryListTable';
import { deliveries } from '@/data/deliveries';

export default function DeliveryList() {
  return <DeliveryListTable deliveries={deliveries} />;
}
