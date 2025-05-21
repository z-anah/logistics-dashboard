'use client'

import { Vehicle } from '@/types/vehicle'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import VehicleImageSlider from './VehicleImageSlider'

interface VehicleDetailDisplayProps {
  vehicle: Vehicle
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

export default function VehicleDetailDisplay({ vehicle }: VehicleDetailDisplayProps) {
  const getStatusColor = (status: Vehicle['status']) => {
    switch (status) {
      case 'Active':
        return 'success'
      case 'Maintenance':
        return 'warning'
      case 'Out of Service':
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
                {vehicle.vehicleNumber}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <Chip
                label={vehicle.status}
                color={getStatusColor(vehicle.status)}
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
                <Typography variant="subtitle1" sx={{ mb: 3, fontWeight: 600 }}>Vehicle Information</Typography>
                <DetailRow icon="ri-fingerprint-line" label="Vehicle ID" value={vehicle.vehicleId} />
                <DetailRow icon="ri-truck-line" label="Type" value={vehicle.type} />
                <DetailRow icon="ri-archive-line" label="Capacity" value={vehicle.capacity} />
                <DetailRow icon="ri-calendar-line" label="Last Maintenance" value={vehicle.lastMaintenanceDate} />
              </Grid>
              <Grid item xs={12} md={6}>
                {vehicle.images && vehicle.images.length > 0 && (
                  <VehicleImageSlider images={vehicle.images} />
                )}
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}
