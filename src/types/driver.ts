export type Driver = {
  driverId: string;
  name: string;
  licenseNumber: string;
  phone: string;
  email: string;
  status: 'Active' | 'On Leave' | 'Inactive';
  assignedVehicleId?: string;
  images?: string[];
}
