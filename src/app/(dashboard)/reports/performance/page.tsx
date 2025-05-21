'use client'

import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import { reportsByType } from '@/data/reports'
import { BarChart, PieChart } from '@mui/x-charts'

export default function PerformanceReportsPage() {
  const performanceReports = reportsByType['performance'] || []

  return (
    <Box className='p-6'>
      <Typography variant='h5' className='mb-6'>Performance Reports</Typography>
      
      {performanceReports.map((report) => (
        <Box key={report.id} sx={{ mb: 4 }}>
          <Card sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant='subtitle2' color='text.secondary'>
                Report {report.id} - {report.dateGenerated}
              </Typography>
            </CardContent>
          </Card>

          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: 250 }}>
                <CardContent>
                  <Typography variant='h6' color='primary'>Total Revenue</Typography>
                  <Typography variant='h4'>${report.dataSummary.totalRevenue}</Typography>
                  <BarChart
                    series={[{
                      data: [15000, 20000, report.dataSummary.totalRevenue],
                      color: '#2196f3'
                    }]}
                    width={300}
                    height={150}
                    xAxis={[{ data: ['Last Month', 'Last Week', 'Current'] }]}
                  />
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card sx={{ height: 250 }}>
                <CardContent>
                  <Typography variant='h6' color='primary'>Customer Satisfaction</Typography>
                    <Typography variant='h4' >
                      {report.dataSummary.customerSatisfaction}/5.0
                    </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <PieChart
                      series={[{
                        data: [
                          { value: report.dataSummary.customerSatisfaction, color: '#4caf50' },
                          { value: 5 - report.dataSummary.customerSatisfaction, color: '#e0e0e0' }
                        ],
                        startAngle: -90,
                        endAngle: 90,
                        innerRadius: 0.7,
                      }]}
                      width={200}
                      height={200}
                      slotProps={{ legend: { hidden: true }}}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card sx={{ height: 250 }}>
                <CardContent>
                  <Typography variant='h6' color='primary'>On-Time Delivery Rate</Typography>
                    <Typography variant='h4'>
                      {report.dataSummary.onTimeDeliveries}%
                    </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <PieChart
                      series={[{
                        data: [
                          { value: report.dataSummary.onTimeDeliveries, color: '#ff9800' },
                          { value: 100 - report.dataSummary.onTimeDeliveries, color: '#e0e0e0' }
                        ],
                        innerRadius: 0.7,
                      }]}
                      width={200}
                      height={100}
                      slotProps={{ legend: { hidden: true }}}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      ))}
    </Box>
  )
}
