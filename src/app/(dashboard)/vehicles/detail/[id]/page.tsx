import { notFound } from 'next/navigation'
import VehicleDetailDisplay from '../components/VehicleDetailDisplay'
import { Vehicle } from '@/types/vehicle'

// Mock data - replace with actual API call
const vehicleData: Record<string, Vehicle> = {
  'V001': {
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
  }
}

export default function VehicleDetail({ params }: { params: { id: string } }) {
  const vehicle = vehicleData[params.id]

  if (!vehicle) {
    notFound()
  }

  return <VehicleDetailDisplay vehicle={vehicle} />
}
