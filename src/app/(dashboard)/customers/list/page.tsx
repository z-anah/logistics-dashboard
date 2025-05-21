import CustomerListTable from './components/CustomerListTable';
import { customers } from '@/data/customers';

export default function CustomerList() {
  return <CustomerListTable customers={customers} />;
}
