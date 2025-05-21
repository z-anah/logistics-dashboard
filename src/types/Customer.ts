export type Customer = {
  customerId: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  status: 'Active' | 'Inactive';
  images?: string[];
}
