'use client'

import { Box, Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import { reportsByType } from '@/data/reports'

export default function DeliveryReportsPage() {
  const deliveryReports = reportsByType['delivery'] || []

  return (
    <Box className='p-6'>
      <Typography variant='h5' className='mb-6'>Delivery Reports</Typography>
      
      <Card>
        <CardContent>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Report ID</TableCell>
                  <TableCell>Date Generated</TableCell>
                  <TableCell>Total Deliveries</TableCell>
                  <TableCell>On-Time</TableCell>
                  <TableCell>Delayed</TableCell>
                  <TableCell>Avg. Time (min)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {deliveryReports.map((report) => (
                  <TableRow key={report.id}>
                    <TableCell>{report.id}</TableCell>
                    <TableCell>{report.dateGenerated}</TableCell>
                    <TableCell>{report.dataSummary.totalDeliveries}</TableCell>
                    <TableCell>{report.dataSummary.onTimeDeliveries}</TableCell>
                    <TableCell>{report.dataSummary.delayedDeliveries}</TableCell>
                    <TableCell>{report.dataSummary.averageDeliveryTime}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  )
}
