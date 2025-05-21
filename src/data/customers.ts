import { Customer } from "@/types/Customer";

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
  },
  {
    customerId: 'C004',
    name: 'EcoFresh Markets',
    address: '321 Green Street, Seattle, WA 98101',
    phone: '+1 206-555-0126',
    email: 'orders@ecofresh.com',
    status: 'Active',
    images: ['https://example.com/customer4.jpg']
  },
  {
    customerId: 'C005',
    name: 'Metro Electronics',
    address: '567 Circuit Ave, Austin, TX 78701',
    phone: '+1 512-555-0127',
    email: 'shipping@metroelec.com',
    status: 'Active',
    images: ['https://example.com/customer5.jpg']
  },
  {
    customerId: 'C006',
    name: 'Healthcare Supplies Co',
    address: '890 Medical Center Blvd, Boston, MA 02115',
    phone: '+1 617-555-0128',
    email: 'logistics@healthsupplies.com',
    status: 'Active',
    images: ['https://example.com/customer6.jpg']
  }
];

export const customersById = customers.reduce((acc, customer) => {
  acc[customer.customerId] = customer;
  return acc;
}, {} as Record<string, Customer>);
