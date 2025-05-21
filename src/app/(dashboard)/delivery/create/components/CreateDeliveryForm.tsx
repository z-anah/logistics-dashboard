'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Box,
  Grid,
  TextField,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Alert,
  Typography
} from '@mui/material'
import { customers } from '@/data/customers'
import { drivers } from '@/data/drivers'
import { vehicles } from '@/data/vehicles'
import { DeliveryStatus } from '@/types/delivery'

const initialStatus: DeliveryStatus[] = ['Pending', 'Scheduled']

const SectionTitle = ({ icon, title }: { icon: string; title: string }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
    <i className={icon} style={{ fontSize: '1.2rem', color: 'text.secondary' }} />
    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
      {title}
    </Typography>
  </Box>
);

export default function CreateDeliveryForm() {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // TODO: Implement form submission
    router.push('/delivery/list')
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      {error && (
        <Alert severity="error" sx={{ mb: 4 }}>{error}</Alert>
      )}
      
      <Grid container spacing={4}>
        {/* Delivery Details Section */}
        <Grid item xs={12}>
          <SectionTitle icon="ri-truck-line" title="Delivery Details" />
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Customer</InputLabel>
            <Select required label="Customer" defaultValue="">
              {customers.map(customer => (
                <MenuItem key={customer.customerId} value={customer.customerId}>
                  {customer.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* Assignment Section */}
        <Grid item xs={12} sx={{ mt: 2 }}>
          <SectionTitle icon="ri-team-line" title="Assignment" />
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Driver</InputLabel>
            <Select required label="Driver" defaultValue="">
              {drivers.map(driver => (
                <MenuItem key={driver.driverId} value={driver.driverId}>
                  {driver.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Vehicle</InputLabel>
            <Select required label="Vehicle" defaultValue="">
              {vehicles.map(vehicle => (
                <MenuItem key={vehicle.vehicleId} value={vehicle.vehicleId}>
                  {vehicle.vehicleNumber} - {vehicle.type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* Location Section */}
        <Grid item xs={12} sx={{ mt: 2 }}>
          <SectionTitle icon="ri-map-pin-line" title="Location Details" />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            variant="outlined"
            required
            label="Pickup Location"
            placeholder="Enter pickup address"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            variant="outlined"
            required
            label="Dropoff Location"
            placeholder="Enter delivery address"
          />
        </Grid>

        {/* Schedule Section */}
        <Grid item xs={12} sx={{ mt: 2 }}>
          <SectionTitle icon="ri-calendar-line" title="Schedule" />
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Status</InputLabel>
            <Select required label="Status" defaultValue="Pending">
              {initialStatus.map(status => (
                <MenuItem key={status} value={status}>
                  {status}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            variant="outlined"
            required
            type="datetime-local"
            label="Scheduled Date"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        {/* Additional Information */}
        <Grid item xs={12} sx={{ mt: 2 }}>
          <SectionTitle icon="ri-file-text-line" title="Additional Information" />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            label="Notes"
            placeholder="Enter any additional notes"
          />
        </Grid>

        <Grid item xs={12} sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
          <Button
            variant="outlined"
            onClick={() => router.push('/delivery/list')}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            startIcon={<i className="ri-save-line" />}
          >
            Create Delivery
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}
