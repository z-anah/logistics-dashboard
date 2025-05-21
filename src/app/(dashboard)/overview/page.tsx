'use client'

import { Box, Grid, Card, CardContent, Typography } from '@mui/material'

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
      </Grid>
    </Box>
  )
}
