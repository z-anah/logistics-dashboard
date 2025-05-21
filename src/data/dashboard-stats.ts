export const dashboardStats = {
  deliveries: {
    active: 24,
    completed: 156,
    delayed: 8,
    growth: '+12%',
    timeframe: 'from last week'
  },
  drivers: {
    available: 18,
    onDelivery: 3,
    onLeave: 2,
    total: 23
  },
  revenue: {
    current: 12450,
    previous: 10200,
    growth: '+22%',
    timeframe: 'vs last month'
  },
  vehicles: {
    active: 15,
    total: 20,
    maintenance: 3,
    idle: 2
  },
  customerStats: {
    satisfaction: 4.8,
    totalReviews: 156,
    complaints: 3,
    positiveRating: '96%'
  },
  efficiency: {
    onTimeDelivery: '95%',
    averageDeliveryTime: '45 mins',
    fuelEfficiency: '8.5 km/L',
    routeOptimization: '88%'
  },
  charts: {
    deliveryTrends: {
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      data: {
        onTime: [85, 88, 92, 87, 90, 95],
        delayed: [15, 12, 8, 13, 10, 5]
      }
    },
    revenueGrowth: {
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      data: [22000, 25000, 28000, 24000, 30000, 32000]
    },
    driverPerformance: {
      metrics: ['Speed', 'Safety', 'Efficiency', 'Service'],
      data: [85, 92, 88, 95]
    },
    fuelConsumption: {
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      data: [8.2, 8.5, 8.3, 8.6, 8.4, 8.5]
    }
  }
}
