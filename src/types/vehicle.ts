export type Vehicle = {
  vehicleId: string;
  vehicleNumber: string;
  type: string;
  capacity: string;
  status: 'Active' | 'Maintenance' | 'Out of Service';
  lastMaintenanceDate: string;
}
