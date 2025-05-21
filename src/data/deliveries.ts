import { Delivery } from '@/types/delivery';

export const deliveries: Delivery[] = [
  {
    deliveryId: 'DEL001',
    customerId: 'C001',
    driverId: 'D001',
    vehicleId: 'V001',
    pickupLocation: '123 Warehouse St, Brooklyn, NY 11201',
    dropoffLocation: '456 Business Ave, Manhattan, NY 10001',
    status: 'In Transit',
    scheduledDate: '2024-01-15T09:00:00Z',
    deliveryDate: undefined,
    notes: 'Handle with care. Fragile items.'
  },
  {
    deliveryId: 'DEL002',
    customerId: 'C002',
    driverId: 'D002',
    vehicleId: 'V002',
    pickupLocation: '789 Storage Rd, Queens, NY 11101',
    dropoffLocation: '321 Tech Park, San Francisco, CA 94105',
    status: 'Delivered',
    scheduledDate: '2024-01-14T10:00:00Z',
    deliveryDate: '2024-01-14T15:30:00Z',
    notes: 'Customer requested evening delivery'
  },
  {
    deliveryId: 'DEL003',
    customerId: 'C003',
    driverId: 'D003',
    vehicleId: 'V003',
    pickupLocation: '567 Port Ave, Miami, FL 33101',
    dropoffLocation: '890 Beach Rd, Miami Beach, FL 33139',
    status: 'Pending',
    scheduledDate: '2024-01-16T14:00:00Z',
    notes: 'Priority delivery'
  },
  {
    deliveryId: 'DEL004',
    customerId: 'C004',
    driverId: 'D004',
    vehicleId: 'V004',
    pickupLocation: '123 Distribution Center, Seattle, WA 98101',
    dropoffLocation: '456 Market St, Portland, OR 97201',
    status: 'Scheduled',
    scheduledDate: '2024-01-17T08:00:00Z',
    notes: 'Temperature sensitive goods'
  },
  {
    deliveryId: 'DEL005',
    customerId: 'C005',
    driverId: 'D005',
    vehicleId: 'V005',
    pickupLocation: '789 Tech Hub, Austin, TX 78701',
    dropoffLocation: '321 Innovation Pkwy, Dallas, TX 75201',
    status: 'In Transit',
    scheduledDate: '2024-01-16T11:00:00Z',
    notes: 'High-value electronics'
  },
  {
    deliveryId: 'DEL006',
    customerId: 'C006',
    driverId: 'D006',
    vehicleId: 'V006',
    pickupLocation: '456 Medical District, Boston, MA 02115',
    dropoffLocation: '789 Hospital Row, Providence, RI 02903',
    status: 'Pending',
    scheduledDate: '2024-01-18T09:00:00Z',
    notes: 'Medical supplies - urgent delivery'
  }
];

export const deliveriesById = deliveries.reduce((acc, delivery) => {
  acc[delivery.deliveryId] = delivery;
  return acc;
}, {} as Record<string, Delivery>);
