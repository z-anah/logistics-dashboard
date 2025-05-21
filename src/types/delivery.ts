export type DeliveryStatus = 'Pending' | 'Scheduled' | 'In Transit' | 'Delivered' | 'Cancelled';

export type Delivery = {
  deliveryId: string;
  customerId: string;
  driverId: string;
  vehicleId: string;
  pickupLocation: string;
  dropoffLocation: string;
  status: DeliveryStatus;
  scheduledDate: string;
  deliveryDate?: string;
  notes?: string;
}
