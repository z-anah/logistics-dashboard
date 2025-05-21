'use client'

import { Driver } from '@/types/driver'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import DriverImageSlider from './VehicleImageSlider'

interface DriverProfileDisplayProps {
  driver: Driver
}

const DetailRow = ({ label, value, icon }: { label: string; value: string; icon?: string }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2.5 }}>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, minWidth: '180px' }}>
      {icon && <i className={icon} style={{ fontSize: '1.2rem', color: 'text.secondary' }} />}
      <Typography variant="subtitle2" color="text.secondary">
        {label}:
      </Typography>
    </Box>
    <Typography variant="body1" sx={{ fontWeight: 500 }}>{value}</Typography>
  </Box>
)

export default function DriverProfileDisplay({ driver }: DriverProfileDisplayProps) {
  const getStatusColor = (status: Driver['status']) => {
    switch (status) {
      case 'Active':
        return 'success'
      case 'On Leave':
        return 'warning'
      case 'Inactive':
        return 'error'
      default:
        return 'default'
    }
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Card elevation={3}>
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <Typography variant="h5" component="h1" sx={{ mb: 1 }}>
                {driver.name}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <Chip
                label={driver.status}
                color={getStatusColor(driver.status)}
                sx={{ fontWeight: 500 }}
              />
              <Button
                variant="outlined"
                startIcon={<i className="ri-pencil-line" />}
                size="small"
              >
                Edit
              </Button>
            </Box>
          </Box>

          <Box>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" sx={{ mb: 3, fontWeight: 600 }}>Driver Information</Typography>
                <DetailRow icon="ri-fingerprint-line" label="Driver ID" value={driver.driverId} />
                <DetailRow icon="ri-id-card-line" label="License Number" value={driver.licenseNumber} />
                <DetailRow icon="ri-phone-line" label="Phone" value={driver.phone} />
                <DetailRow icon="ri-mail-line" label="Email" value={driver.email} />
                <DetailRow icon="ri-truck-line" label="Assigned Vehicle" value={driver.assignedVehicleId || 'Not Assigned'} />
              </Grid>
              <Grid item xs={12} md={6}>
                {driver.images && driver.images.length > 0 && (
                  <DriverImageSlider images={driver.images} />
                )}
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}
