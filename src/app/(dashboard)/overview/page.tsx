'use client'

import { Box, Grid, Card, CardContent, Typography } from '@mui/material'
import { LineChart, BarChart } from '@mui/x-charts'
import { dashboardStats } from '@/data/dashboard-stats'

export default function OverviewPage() {
  return (
    <Box className='p-6'>
      <Typography variant='h5' className='mb-6'>Dashboard Overview</Typography>
      
      <Grid container spacing={3}>
        {/* Active Deliveries */}
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <i className="ri-truck-line text-2xl text-blue-500 mr-2" />
                <Typography variant='subtitle1'>Active Deliveries</Typography>
              </Box>
              <Typography variant='h4'>24</Typography>
              <Typography variant='subtitle2' color='text.secondary'>+12% from last week</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Available Drivers */}
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <i className="ri-user-2-line text-2xl text-green-500 mr-2" />
                <Typography variant='subtitle1'>Available Drivers</Typography>
              </Box>
              <Typography variant='h4'>18</Typography>
              <Typography variant='subtitle2' color='text.secondary'>3 on delivery</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Total Revenue */}
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <i className="ri-money-dollar-circle-line text-2xl text-yellow-500 mr-2" />
                <Typography variant='subtitle1'>Total Revenue</Typography>
              </Box>
              <Typography variant='h4'>$12,450</Typography>
              <Typography variant='subtitle2' color='text.secondary'>This month</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Vehicle Status */}
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <i className="ri-car-line text-2xl text-purple-500 mr-2" />
                <Typography variant='subtitle1'>Vehicle Status</Typography>
              </Box>
              <Typography variant='h4'>15/20</Typography>
              <Typography variant='subtitle2' color='text.secondary'>Vehicles in service</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Customer Satisfaction */}
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <i className="ri-emotion-happy-line text-2xl text-pink-500 mr-2" />
                <Typography variant='subtitle1'>Customer Satisfaction</Typography>
              </Box>
              <Typography variant='h4'>{dashboardStats.customerStats.satisfaction}/5.0</Typography>
              <Typography variant='subtitle2' color='text.secondary'>
                {dashboardStats.customerStats.totalReviews} total reviews
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Route Optimization */}
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <i className="ri-route-line text-2xl text-indigo-500 mr-2" />
                <Typography variant='subtitle1'>Route Optimization</Typography>
              </Box>
              <Typography variant='h4'>{dashboardStats.efficiency.routeOptimization}</Typography>
              <Typography variant='subtitle2' color='text.secondary'>Efficiency rate</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Fuel Efficiency */}
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <i className="ri-gas-station-line text-2xl text-orange-500 mr-2" />
                <Typography variant='subtitle1'>Fuel Efficiency</Typography>
              </Box>
              <Typography variant='h4'>{dashboardStats.efficiency.fuelEfficiency}</Typography>
              <Typography variant='subtitle2' color='text.secondary'>Average consumption</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Delivery Time */}
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <i className="ri-time-line text-2xl text-cyan-500 mr-2" />
                <Typography variant='subtitle1'>Avg Delivery Time</Typography>
              </Box>
              <Typography variant='h4'>{dashboardStats.efficiency.averageDeliveryTime}</Typography>
              <Typography variant='subtitle2' color='text.secondary'>Per delivery</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Medium sized charts */}
      <Grid container spacing={3} sx={{ mt: 3 }}>
        {/* Delivery Trends Chart */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: 400 }}>
            <CardContent>
              <Typography variant='h6' sx={{ mb: 2 }}>Delivery Trends</Typography>
              <LineChart
                xAxis={[{ 
                  data: dashboardStats.charts.deliveryTrends.months,
                  scaleType: 'band'
                }]}
                series={[
                  { 
                    data: dashboardStats.charts.deliveryTrends.data.onTime,
                    label: 'On Time',
                    color: '#2196f3'
                  },
                  {
                    data: dashboardStats.charts.deliveryTrends.data.delayed,
                    label: 'Delayed',
                    color: '#ff9800'
                  }
                ]}
                height={300}
                margin={{ top: 20, bottom: 30, left: 40, right: 20 }}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Revenue Growth Chart */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: 400 }}>
            <CardContent>
              <Typography variant='h6' sx={{ mb: 2 }}>Revenue Growth</Typography>
              <BarChart
                xAxis={[{ 
                  data: dashboardStats.charts.revenueGrowth.months,
                  scaleType: 'band'
                }]}
                series={[
                  { 
                    data: dashboardStats.charts.revenueGrowth.data,
                    color: '#4caf50'
                  }
                ]}
                height={300}
                margin={{ top: 20, bottom: 30, left: 40, right: 20 }}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Driver Performance Chart */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: 400 }}>
            <CardContent>
              <Typography variant='h6' sx={{ mb: 2 }}>Driver Performance</Typography>
              <BarChart
                xAxis={[{ data: dashboardStats.charts.driverPerformance.metrics, scaleType: 'band' }]}
                series={[{ data: dashboardStats.charts.driverPerformance.data, color: '#9c27b0' }]}
                height={300}
                margin={{ top: 20, bottom: 30, left: 40, right: 20 }}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Fuel Consumption Chart */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: 400 }}>
            <CardContent>
              <Typography variant='h6' sx={{ mb: 2 }}>Fuel Consumption</Typography>
              <LineChart
                xAxis={[{ data: dashboardStats.charts.fuelConsumption.months, scaleType: 'band' }]}
                series={[{ data: dashboardStats.charts.fuelConsumption.data, color: '#ff5722' }]}
                height={300}
                margin={{ top: 20, bottom: 30, left: 40, right: 20 }}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
