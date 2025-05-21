import * as React from 'react';
import { Vehicle } from '@/types/vehicle';

const rows: Vehicle[] = [
  {
    vehicleId: 'V001',
    vehicleNumber: 'TRK-2023-001',
    type: 'Heavy Truck',
    capacity: '20000 kg',
    status: 'Active',
    lastMaintenanceDate: '2023-10-15',
    images: [
      "https://omo-oss-image.thefastimg.com/portal-saas/pg2025012217004299800/cms/image/ha80e0f906c3042569bfe256bf1ef1e84i.jpg",
      "https://omo-oss-image.thefastimg.com/portal-saas/pg2025012217004299800/cms/image/h6746a162a6f84d728b1ad9cef6d74704q.jpg",
    ]
  },
  {
    vehicleId: 'V002',
    vehicleNumber: 'VAN-2023-002',
    type: 'Delivery Van',
    capacity: '1500 kg',
    status: 'Maintenance',
    lastMaintenanceDate: '2023-11-01',
    images: [
      "https://omo-oss-image.thefastimg.com/portal-saas/pg2025012217004299800/cms/image/ha80e0f906c3042569bfe256bf1ef1e84i.jpg",
      "https://omo-oss-image.thefastimg.com/portal-saas/pg2025012217004299800/cms/image/h6746a162a6f84d728b1ad9cef6d74704q.jpg",
    ]
  },
  {
    vehicleId: 'V003',
    vehicleNumber: 'TRK-2023-003',
    type: 'Medium Truck',
    capacity: '10000 kg',
    status: 'Active',
    lastMaintenanceDate: '2023-09-30',
    images: [
      "https://omo-oss-image.thefastimg.com/portal-saas/pg2025012217004299800/cms/image/ha80e0f906c3042569bfe256bf1ef1e84i.jpg",
      "https://omo-oss-image.thefastimg.com/portal-saas/pg2025012217004299800/cms/image/h6746a162a6f84d728b1ad9cef6d74704q.jpg",
    ]
  },
];

import VehicleListTable from './components/VehicleListTable';

export default function VehicleList() {
  return <VehicleListTable vehicles={rows} />;
}
