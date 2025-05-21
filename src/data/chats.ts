import { ChatThread } from '@/types/chat'

export const chatThreads: ChatThread[] = [
  {
    id: 1,
    name: 'Driver #1242',
    avatar: '/images/avatars/1.png',
    lastMessage: 'Delivery completed',
    time: '5m ago',
    messages: [
      { id: 1, sender: 'Driver', message: 'Package picked up from warehouse', time: '10:30 AM' },
      { id: 2, sender: 'You', message: 'Great, what\'s the ETA?', time: '10:32 AM' },
      { id: 3, sender: 'Driver', message: 'ETA is 45 minutes', time: '10:33 AM' }
    ]
  },
  {
    id: 2,
    name: 'Customer Support',
    avatar: '/images/avatars/2.png',
    lastMessage: 'New delivery request',
    time: '10m ago',
    messages: []
  },
  {
    id: 3,
    name: 'Warehouse Team',
    avatar: '/images/avatars/3.png',
    lastMessage: 'Package ready for pickup',
    time: '1h ago',
    messages: []
  }
]

export const getThreadById = (id: number) => chatThreads.find(thread => thread.id === id)
