'use client'

import { useRouter } from 'next/navigation';
import { Delivery } from '@/types/delivery';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Chip from '@mui/material/Chip';

type Props = {
  deliveries: Delivery[];
}

export default function DeliveryListTable({ deliveries }: Props) {
  const router = useRouter();

  const getStatusColor = (status: Delivery['status']) => {
    switch (status) {
      case 'Delivered':
        return 'success';
      case 'In Transit':
        return 'primary';
      case 'Pending':
        return 'warning';
      case 'Cancelled':
        return 'error';
      default:
        return 'default';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };
  
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader sx={{ minWidth: 650 }} aria-label="delivery list table">
        <TableHead>
          <TableRow>
            <TableCell>Delivery ID</TableCell>
            <TableCell>Customer ID</TableCell>
            <TableCell>Driver ID</TableCell>
            <TableCell>Vehicle ID</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Scheduled Date</TableCell>
            <TableCell>Delivery Date</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {deliveries.map((row) => (
            <TableRow key={row.deliveryId}>
              <TableCell>{row.deliveryId}</TableCell>
              <TableCell>{row.customerId}</TableCell>
              <TableCell>{row.driverId}</TableCell>
              <TableCell>{row.vehicleId}</TableCell>
              <TableCell>
                <Chip 
                  label={row.status} 
                  color={getStatusColor(row.status)}
                  size="small"
                />
              </TableCell>
              <TableCell>{formatDate(row.scheduledDate)}</TableCell>
              <TableCell>{row.deliveryDate ? formatDate(row.deliveryDate) : '-'}</TableCell>
              <TableCell align="right">
                <Tooltip title="View Details">
                  <IconButton 
                    size="small" 
                    onClick={() => router.push(`/delivery/detail/${row.deliveryId}`)}
                  >
                    <i className="ri-eye-line" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Edit">
                  <IconButton size="small">
                    <i className="ri-pencil-line" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton size="small">
                    <i className="ri-delete-bin-line" />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
