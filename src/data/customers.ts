import { Customer } from '@/types/customer';

export const customers: Customer[] = [
  {
    customerId: 'C001',
    name: 'Acme Corporation',
    address: '123 Business Ave, Suite 100, New York, NY 10001',
    phone: '+1 212-555-0123',
    email: 'contact@acmecorp.com',
    status: 'Active',
    images: ['https://example.com/customer1.jpg']
  },
  {
    customerId: 'C002',
    name: 'TechStart Solutions',
    address: '456 Innovation Dr, San Francisco, CA 94105',
    phone: '+1 415-555-0124',
    email: 'info@techstart.com',
    status: 'Active',
    images: ['https://example.com/customer2.jpg']
  },
  {
    customerId: 'C003',
    name: 'Global Logistics Inc',
    address: '789 Shipping Lane, Miami, FL 33101',
    phone: '+1 305-555-0125',
    email: 'support@globallogistics.com',
    status: 'Inactive',
    images: ['https://example.com/customer3.jpg']
  }
];

export const customersById = customers.reduce((acc, customer) => {
  acc[customer.customerId] = customer;
  return acc;
}, {} as Record<string, Customer>);
