'use client'

import { Box, Grid, Card, CardContent, Typography } from '@mui/material'

export default function AnalyticsPage() {
  return (
    <Box className='p-6'>
      <Typography variant='h5' className='mb-6'>Analytics Dashboard</Typography>
      
      <Grid container spacing={3}>
        {/* Delivery Performance */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <i className="ri-line-chart-line text-2xl text-blue-500 mr-2" />
                <Typography variant='h6'>Delivery Performance</Typography>
              </Box>
              <Box sx={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography color='text.secondary'>Chart Component Here</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Revenue Analytics */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <i className="ri-bar-chart-line text-2xl text-green-500 mr-2" />
                <Typography variant='h6'>Revenue Analytics</Typography>
              </Box>
              <Box sx={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography color='text.secondary'>Chart Component Here</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Driver Statistics */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <i className="ri-user-chart-line text-2xl text-yellow-500 mr-2" />
                <Typography variant='h6'>Driver Statistics</Typography>
              </Box>
              <Box sx={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography color='text.secondary'>Chart Component Here</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Vehicle Analytics */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <i className="ri-car-line text-2xl text-purple-500 mr-2" />
                <Typography variant='h6'>Vehicle Analytics</Typography>
              </Box>
              <Box sx={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography color='text.secondary'>Chart Component Here</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
