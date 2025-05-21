'use client'

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Driver } from '@/types/driver';
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
  drivers: Driver[];
}

export default function DriverListTable({ drivers }: Props) {
  const router = useRouter();
  
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader sx={{ minWidth: 650 }} aria-label="driver list table">
        <TableHead>
          <TableRow>
            <TableCell>Driver ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>License Number</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Assigned Vehicle</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {drivers.map((row) => (
            <TableRow
              key={row.driverId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{row.driverId}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.licenseNumber}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.assignedVehicleId || 'Not Assigned'}</TableCell>
              <TableCell align="right">
                <Tooltip title="View Details">
                  <IconButton 
                    size="small" 
                    onClick={() => router.push(`/drivers/profile/${row.driverId}`)}
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
