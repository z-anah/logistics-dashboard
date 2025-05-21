import { notFound } from 'next/navigation'
import VehicleDetailDisplay from '../components/VehicleDetailDisplay'
import { vehiclesById } from '@/data/vehicles'

export default function VehicleDetail({ params }: { params: { id: string } }) {
  const vehicle = vehiclesById[params.id]

  if (!vehicle) {
    notFound()
  }

  return <VehicleDetailDisplay vehicle={vehicle} />
}
