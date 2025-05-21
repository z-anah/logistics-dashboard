import { notFound } from 'next/navigation'
import CustomerDetailDisplay from '../components/CustomerDetailDisplay'
import { customersById } from '@/data/customers'

export default function CustomerDetail({ params }: { params: { id: string } }) {
  const customer = customersById[params.id]

  if (!customer) {
    notFound()
  }

  return <CustomerDetailDisplay customer={customer} />
}
