import { Vehicle } from '@/types/vehicle';

export const vehicles: Vehicle[] = [
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
  {
    vehicleId: 'V004',
    vehicleNumber: 'VAN-2023-004',
    type: 'Electric Van',
    capacity: '1200 kg',
    status: 'Active',
    lastMaintenanceDate: '2023-12-15',
    images: [
      "https://omo-oss-image.thefastimg.com/portal-saas/pg2025012217004299800/cms/image/ha80e0f906c3042569bfe256bf1ef1e84i.jpg",
    ]
  },
  {
    vehicleId: 'V005',
    vehicleNumber: 'TRK-2023-005',
    type: 'Refrigerated Truck',
    capacity: '15000 kg',
    status: 'Active',
    lastMaintenanceDate: '2023-12-20',
    images: [
      "https://omo-oss-image.thefastimg.com/portal-saas/pg2025012217004299800/cms/image/ha80e0f906c3042569bfe256bf1ef1e84i.jpg",
    ]
  },
  {
    vehicleId: 'V006',
    vehicleNumber: 'SPR-2023-006',
    type: 'Sprinter',
    capacity: '3500 kg',
    status: 'In Repair',
    lastMaintenanceDate: '2024-01-05',
    images: [
      "https://omo-oss-image.thefastimg.com/portal-saas/pg2025012217004299800/cms/image/ha80e0f906c3042569bfe256bf1ef1e84i.jpg",
    ]
  }
];

export const vehiclesById = vehicles.reduce((acc, vehicle) => {
  acc[vehicle.vehicleId] = vehicle;
  return acc;
}, {} as Record<string, Vehicle>);
