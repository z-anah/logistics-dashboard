'use client'

import { Delivery, DeliveryStatus } from '@/types/delivery'
import { Customer } from '@/types/Customer'
import { Driver } from '@/types/driver'
import { Vehicle } from '@/types/vehicle'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

interface DeliveryDetailProps {
  delivery: Delivery
  customer: Customer
  driver: Driver
  vehicle: Vehicle
}

type StatusHistory = {
  status: DeliveryStatus;
  timestamp: string;
  description: string;
}

const tempStatusHistory: StatusHistory[] = [
  {
    status: 'Pending',
    timestamp: '2024-01-15T08:00:00Z',
    description: 'Delivery request received'
  },
  {
    status: 'Scheduled',
    timestamp: '2024-01-15T08:30:00Z',
    description: 'Driver and vehicle assigned'
  },
  {
    status: 'In Transit',
    timestamp: '2024-01-15T09:15:00Z',
    description: 'Package picked up and in route'
  },
  {
    status: 'Delivered',
    timestamp: '2024-01-15T14:30:00Z',
    description: 'Successfully delivered to recipient'
  }
  // Note: 'Cancelled' status is not included in the normal flow
  // but could occur at any point before 'Delivered'
];

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

type DeliveryMapProps = {
  pickupLocation: [number, number]
  dropoffLocation: [number, number]
  truckLocation: [number, number]
  routeCoordinates: [number, number][]
  progressIndex: number
}

const DeliveryMap = ({ pickupLocation, dropoffLocation, truckLocation, routeCoordinates, progressIndex }: DeliveryMapProps) => {
  const mapRef = useRef<L.Map | null>(null)

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map('map').setView(pickupLocation, 13)

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(mapRef.current)
    }

    const map = mapRef.current

    map.eachLayer(layer => {
      if (layer instanceof L.Marker || layer instanceof L.Polyline) {
        layer.remove()
      }
    })

    const pickupIcon = L.icon({
      iconUrl: '/images/map/pickup-marker.png',
      iconSize: [32, 32],
      iconAnchor: [16, 32]
    })

    const dropoffIcon = L.icon({
      iconUrl: '/images/map/dropoff-marker.png',
      iconSize: [32, 32],
      iconAnchor: [16, 32]
    })

    const truckIcon = L.icon({
      iconUrl: '/images/map/truck-marker.png',
      iconSize: [32, 32],
      iconAnchor: [16, 32]
    })

    L.marker(pickupLocation, { icon: pickupIcon }).addTo(map)
    L.marker(dropoffLocation, { icon: dropoffIcon }).addTo(map)
    L.marker(truckLocation, { icon: truckIcon }).addTo(map)

    if (progressIndex > 0) {
      L.polyline(routeCoordinates.slice(0, progressIndex + 1), {
        color: '#4CAF50',
        weight: 4
      }).addTo(map)
    }

    if (progressIndex < routeCoordinates.length - 1) {
      L.polyline(routeCoordinates.slice(progressIndex), {
        color: '#4CAF50',
        weight: 4,
        opacity: 0.5,
        dashArray: '10, 10'
      }).addTo(map)
    }

    const bounds = L.latLngBounds([pickupLocation, dropoffLocation, truckLocation])
    map.fitBounds(bounds, { padding: [50, 50] })
  }, [pickupLocation, dropoffLocation, truckLocation, routeCoordinates, progressIndex])

  return <div id="map" style={{ height: '400px', width: '100%' }} />
}

export default function DeliveryDetailDisplay({ delivery, customer, driver, vehicle }: DeliveryDetailProps) {
  const getStatusColor = (status: Delivery['status']) => {
    switch (status) {
      case 'Delivered':
        return 'success'
      case 'In Transit':
        return 'primary'
      case 'Pending':
        return 'warning'
      case 'Cancelled':
        return 'error'
      default:
        return 'default'
    }
  }

  const formatDate = (dateString: string) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date(dateString))
  }

  const getCurrentStep = () => {
    return tempStatusHistory.findIndex(history => history.status === delivery.status);
  };

  const getStatusIcon = (status: DeliveryStatus) => {
    switch (status) {
      case 'Pending':
        return 'ri-time-line';
      case 'Scheduled':
        return 'ri-calendar-check-line';
      case 'In Transit':
        return 'ri-truck-line';
      case 'Delivered':
        return 'ri-checkbox-circle-line';
      case 'Cancelled':
        return 'ri-close-circle-line';
      default:
        return 'ri-question-line';
    }
  };

  const getStepIconColor = (historyStatus: DeliveryStatus) => {
    const currentIndex = getCurrentStep();
    const stepIndex = tempStatusHistory.findIndex(h => h.status === historyStatus);
    
    if (delivery.status === 'Cancelled') {
      return '#d32f2f'; // error.main
    }
    
    if (stepIndex < currentIndex) {
      return '#2e7d32'; // success.main - completed
    } else if (stepIndex === currentIndex) {
      return '#1976d2'; // primary.main - current
    } else {
      return '#bdbdbd'; // grey.400 - pending
    }
  };

  // Add this temporary data (you should get real coordinates from your delivery object)
  const mapData = {
    pickupLocation: [51.505, -0.09] as [number, number],
    dropoffLocation: [51.51, -0.1] as [number, number],
    truckLocation: [51.507, -0.095] as [number, number],
    routeCoordinates: [
      [51.505, -0.09],
      [51.506, -0.092],
      [51.507, -0.095],
      [51.508, -0.097],
      [51.51, -0.1]
    ] as [number, number][],
    progressIndex: 2
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>

      <Card elevation={3}>
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <Typography variant="h5" component="h1" sx={{ mb: 1 }}>
                Delivery {delivery.deliveryId}
              </Typography>
            </Box>
            <Button
              variant="outlined"
              startIcon={<i className="ri-pencil-line" />}
              size="small"
            >
              Edit
            </Button>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1" sx={{ mb: 3, fontWeight: 600 }}>Delivery Information</Typography>
              <DetailRow icon="ri-map-pin-line" label="Pickup Location" value={delivery.pickupLocation} />
              <DetailRow icon="ri-map-pin-line" label="Dropoff Location" value={delivery.dropoffLocation} />
              <DetailRow icon="ri-calendar-line" label="Scheduled Date" value={formatDate(delivery.scheduledDate)} />
              {delivery.deliveryDate && (
                <DetailRow icon="ri-time-line" label="Delivery Date" value={formatDate(delivery.deliveryDate)} />
              )}
              {delivery.notes && (
                <DetailRow icon="ri-file-text-line" label="Notes" value={delivery.notes} />
              )}
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1" sx={{ mb: 3, fontWeight: 600 }}>Customer Information</Typography>
              <DetailRow icon="ri-user-line" label="Customer Name" value={customer.name} />
              <DetailRow icon="ri-phone-line" label="Phone" value={customer.phone} />
              <DetailRow icon="ri-mail-line" label="Email" value={customer.email} />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1" sx={{ mb: 3, fontWeight: 600 }}>Driver Information</Typography>
              <DetailRow icon="ri-user-line" label="Driver Name" value={driver.name} />
              <DetailRow icon="ri-phone-line" label="Phone" value={driver.phone} />
              <DetailRow icon="ri-id-card-line" label="License Number" value={driver.licenseNumber} />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1" sx={{ mb: 3, fontWeight: 600 }}>Vehicle Information</Typography>
              <DetailRow icon="ri-truck-line" label="Vehicle Number" value={vehicle.vehicleNumber} />
              <DetailRow icon="ri-information-line" label="Type" value={vehicle.type} />
              <DetailRow icon="ri-box-3-line" label="Capacity" value={vehicle.capacity} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card elevation={3}>
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Status History
              </Typography>
              <Stepper activeStep={getCurrentStep()} alternativeLabel>
                {tempStatusHistory.map((history) => (
                  <Step key={history.status}>
                    <StepLabel
                      StepIconComponent={() => (
                        <i
                          className={getStatusIcon(history.status)}
                          style={{
                            fontSize: '1.5rem',
                            color: getStepIconColor(history.status),
                            marginBottom: '4px',
                            transition: 'color 0.3s ease'
                          }}
                        />
                      )}
                    >
                      <Typography variant="caption" display="block">
                        {history.status}
                      </Typography>
                      <Typography variant="caption" color="text.secondary" display="block">
                        {formatDate(history.timestamp)}
                      </Typography>
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </Box>
        </CardContent>
      </Card>

      <Card elevation={3}>
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <i className="ri-map-2-line" style={{ fontSize: '1.2rem', color: 'text.secondary' }} />
                Delivery Route Map
              </Box>
            </Typography>
            <Box sx={{ borderRadius: 1 }}>
              <DeliveryMap {...mapData} />
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}
