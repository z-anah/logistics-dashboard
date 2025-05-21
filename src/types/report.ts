export type Report = {
  id: string
  type: 'delivery' | 'performance'
  dateGenerated: string
  dataSummary: {
    totalDeliveries: number
    onTimeDeliveries: number
    delayedDeliveries?: number
    averageDeliveryTime?: number
    totalRevenue: number
    customerSatisfaction: number
  }
}
