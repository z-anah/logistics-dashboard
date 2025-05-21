import { Driver } from '@/types/driver';

export const drivers: Driver[] = [
  {
    driverId: 'D001',
    name: 'John Smith',
    licenseNumber: 'DL-2023-001',
    phone: '+1 234-567-8901',
    email: 'john.smith@example.com',
    status: 'Active',
    assignedVehicleId: 'V001',
    images: ['https://liquidtrucking.com/wp-content/uploads/2023/02/3PM_5527-1-1080x675.jpg']
  },
  {
    driverId: 'D002',
    name: 'Jane Doe',
    licenseNumber: 'DL-2023-002',
    phone: '+1 234-567-8902',
    email: 'jane.doe@example.com',
    status: 'On Leave',
    assignedVehicleId: 'V002',
    images: ['https://liquidtrucking.com/wp-content/uploads/2023/02/3PM_5527-1-1080x675.jpg']
  },
  {
    driverId: 'D003',
    name: 'Mike Johnson',
    licenseNumber: 'DL-2023-003',
    phone: '+1 234-567-8903',
    email: 'mike.johnson@example.com',
    status: 'Active',
    assignedVehicleId: 'V003',
    images: ['https://liquidtrucking.com/wp-content/uploads/2023/02/3PM_5527-1-1080x675.jpg']
  }
];

export const driversById = drivers.reduce((acc, driver) => {
  acc[driver.driverId] = driver;
  return acc;
}, {} as Record<string, Driver>);
