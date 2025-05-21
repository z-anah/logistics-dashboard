'use client'

import { Box, Card, CardContent, Typography } from '@mui/material'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { scheduleEvents } from '@/data/schedule'

export default function SchedulePage() {
  return (
    <Box className='p-6'>
      <Typography variant='h5' className='mb-6'>Schedule</Typography>
      
      <Card>
        <CardContent>
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView='dayGridMonth'
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth'
            }}
            events={scheduleEvents}
            height='calc(100vh - 250px)'
            eventClick={(info) => {
              alert(`Event: ${info.event.title}`)
            }}
          />
        </CardContent>
      </Card>
    </Box>
  )
}
