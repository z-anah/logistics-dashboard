'use client'

import { Customer } from '@/types/customer'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

interface CustomerDetailDisplayProps {
  customer: Customer
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

export default function CustomerDetailDisplay({ customer }: CustomerDetailDisplayProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Card elevation={3}>
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <Typography variant="h5" component="h1" sx={{ mb: 1 }}>
                {customer.name}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <Chip
                label={customer.status}
                color={customer.status === 'Active' ? 'success' : 'error'}
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
              <Grid item xs={12}>
                <Typography variant="subtitle1" sx={{ mb: 3, fontWeight: 600 }}>Customer Information</Typography>
                <DetailRow icon="ri-fingerprint-line" label="Customer ID" value={customer.customerId} />
                <DetailRow icon="ri-map-pin-line" label="Address" value={customer.address} />
                <DetailRow icon="ri-phone-line" label="Phone" value={customer.phone} />
                <DetailRow icon="ri-mail-line" label="Email" value={customer.email} />
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}
