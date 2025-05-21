export const scheduleEvents = [
  {
    id: '1',
    title: 'Delivery to Manhattan',
    start: '2025-05-20T10:00:00',
    end: '2025-05-20T11:30:00',
    color: '#2196f3',
    extendedProps: {
      deliveryId: 'DEL001',
      driverId: 'D001',
      status: 'scheduled'
    }
  },
  {
    id: '2',
    title: 'Pickup from Brooklyn Warehouse',
    start: '2025-05-20T13:00:00',
    end: '2025-05-20T14:00:00',
    color: '#4caf50',
    extendedProps: {
      deliveryId: 'DEL002',
      driverId: 'D002',
      status: 'pending'
    }
  },
  {
    id: '3',
    title: 'Driver Meeting',
    start: '2025-05-21T09:00:00',
    end: '2025-05-21T10:00:00',
    color: '#ff9800',
    extendedProps: {
      type: 'meeting',
      description: 'Weekly driver briefing'
    }
  }
]
