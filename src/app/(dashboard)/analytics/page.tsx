'use client'

import { Box, Grid, Card, CardContent, Typography } from '@mui/material'
import { LineChart, BarChart, PieChart } from '@mui/x-charts'
import { deliveryData, revenueData, driverStats, vehicleAnalytics } from '@/data/analytics'

const CHART_HEIGHT = 300
const CARD_HEIGHT = 400

export default function AnalyticsPage() {
  return (
    <Box className='p-6'>
      <Typography variant='h5' className='mb-6'>Analytics Dashboard</Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: CARD_HEIGHT }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <i className="ri-line-chart-line text-2xl text-blue-500 mr-2" />
                <Typography variant='h6'>Delivery Performance</Typography>
              </Box>
              <LineChart
                xAxis={[{ data: deliveryData.months, scaleType: 'band' }]}
                series={[
                  { data: deliveryData.onTime, label: 'On Time', color: '#2196f3' },
                  { data: deliveryData.delayed, label: 'Delayed', color: '#ff9800' }
                ]}
                height={CHART_HEIGHT}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: CARD_HEIGHT }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <i className="ri-bar-chart-line text-2xl text-green-500 mr-2" />
                <Typography variant='h6'>Revenue Analytics</Typography>
              </Box>
              <BarChart
                xAxis={[{ data: revenueData.months, scaleType: 'band' }]}
                series={[{ data: revenueData.revenue, color: '#4caf50' }]}
                height={CHART_HEIGHT}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: CARD_HEIGHT }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <i className="ri-user-line text-2xl text-yellow-500 mr-2" />
                <Typography variant='h6'>Driver Statistics</Typography>
              </Box>
              <PieChart
                series={[{
                  data: driverStats
                }]}
                height={CHART_HEIGHT}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: CARD_HEIGHT }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <i className="ri-car-line text-2xl text-purple-500 mr-2" />
                <Typography variant='h6'>Vehicle Analytics</Typography>
              </Box>
              <BarChart
                xAxis={[{ data: vehicleAnalytics.categories, scaleType: 'band' }]}
                series={[
                  { data: vehicleAnalytics.available, label: 'Available', color: '#9c27b0' },
                  { data: vehicleAnalytics.inMaintenance, label: 'In Maintenance', color: '#e0e0e0' }
                ]}
                height={CHART_HEIGHT}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
