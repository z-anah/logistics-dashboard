import { notFound } from 'next/navigation'
import DeliveryDetailDisplay from '../components/DeliveryDetailDisplay'
import { deliveriesById } from '@/data/deliveries'
import { customersById } from '@/data/customers'
import { driversById } from '@/data/drivers'
import { vehiclesById } from '@/data/vehicles'

export default function DeliveryDetail({ params }: { params: { id: string } }) {
  const delivery = deliveriesById[params.id]

  if (!delivery) {
    notFound()
  }

  const customer = customersById[delivery.customerId]
  const driver = driversById[delivery.driverId]
  const vehicle = vehiclesById[delivery.vehicleId]

  if (!customer || !driver || !vehicle) {
    notFound()
  }

  return (
    <DeliveryDetailDisplay 
      delivery={delivery}
      customer={customer}
      driver={driver}
      vehicle={vehicle}
    />
  )
}
