export type Customer = {
  customerId: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  status: 'Active' | 'Inactive';
  images?: string[];
}
export interface Customer {
    CustomerID: string;
    Name: string;
    Address: string;
    Phone: string;
    Email: string;
}
