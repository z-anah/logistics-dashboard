'use client'

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Vehicle } from '@/types/vehicle';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

type Props = {
  vehicles: Vehicle[];
}

export default function VehicleListTable({ vehicles }: Props) {
  const router = useRouter();
  
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader sx={{ minWidth: 650 }} aria-label="vehicle list table">
        <TableHead>
          <TableRow>
            <TableCell>Vehicle ID</TableCell>
            <TableCell>Vehicle Number</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Capacity</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Last Maintenance</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {vehicles.map((row) => (
            <TableRow
              key={row.vehicleId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{row.vehicleId}</TableCell>
              <TableCell>{row.vehicleNumber}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.capacity}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.lastMaintenanceDate}</TableCell>
              <TableCell align="right">
                <Tooltip title="View Details">
                  <IconButton 
                    size="small" 
                    onClick={() => router.push(`/vehicles/detail/${row.vehicleId}`)}
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
