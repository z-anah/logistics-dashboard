import { Report } from '@/types/report'

export const reports: Report[] = [
  {
    id: 'REP001',
    type: 'delivery',
    dateGenerated: '2024-01-15',
    dataSummary: {
      totalDeliveries: 150,
      onTimeDeliveries: 135,
      delayedDeliveries: 15,
      averageDeliveryTime: 45
    }
  },
  {
    id: 'REP002',
    type: 'performance',
    dateGenerated: '2024-01-15',
    dataSummary: {
      totalRevenue: 25000,
      customerSatisfaction: 4.5,
      onTimeDeliveries: 90
    }
  }
]

export const reportsByType = reports.reduce((acc, report) => {
  if (!acc[report.type]) {
    acc[report.type] = []
  }
  acc[report.type].push(report)
  return acc
}, {} as Record<string, Report[]>)
