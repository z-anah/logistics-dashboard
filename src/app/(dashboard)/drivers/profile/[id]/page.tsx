import { notFound } from 'next/navigation'
import DriverProfileDisplay from '../components/DriverProfileDisplay'
import { driversById } from '@/data/drivers'

export default function DriverProfile({ params }: { params: { id: string } }) {
  const driver = driversById[params.id]

  if (!driver) {
    notFound()
  }

  return <DriverProfileDisplay driver={driver} />
}
