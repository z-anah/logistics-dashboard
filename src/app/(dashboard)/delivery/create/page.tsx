'use client'

import { Box, Typography, Card, CardContent } from '@mui/material'
import CreateDeliveryForm from './components/CreateDeliveryForm'

export default function CreateDeliveryPage() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>Create New Delivery</Typography>
      <Card>
        <CardContent>
          <CreateDeliveryForm />
        </CardContent>
      </Card>
    </Box>
  )
}
