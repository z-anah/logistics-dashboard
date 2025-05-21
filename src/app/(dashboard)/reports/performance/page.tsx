'use client'

import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import { reportsByType } from '@/data/reports'

export default function PerformanceReportsPage() {
  const performanceReports = reportsByType['performance'] || []

  return (
    <Box className='p-6'>
      <Typography variant='h5' className='mb-6'>Performance Reports</Typography>
      
      <Grid container spacing={3}>
        {performanceReports.map((report) => (
          <Grid item xs={12} md={4} key={report.id}>
            <Card>
              <CardContent>
                <Box sx={{ mb: 2 }}>
                  <Typography variant='subtitle2' color='text.secondary'>
                    Report {report.id} - {report.dateGenerated}
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box>
                    <Typography variant='body2' color='text.secondary'>Total Revenue</Typography>
                    <Typography variant='h6'>${report.dataSummary.totalRevenue}</Typography>
                  </Box>
                  
                  <Box>
                    <Typography variant='body2' color='text.secondary'>Customer Satisfaction</Typography>
                    <Typography variant='h6'>{report.dataSummary.customerSatisfaction}/5.0</Typography>
                  </Box>
                  
                  <Box>
                    <Typography variant='body2' color='text.secondary'>On-Time Delivery Rate</Typography>
                    <Typography variant='h6'>{report.dataSummary.onTimeDeliveries}%</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
