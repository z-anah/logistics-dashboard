'use client'

import { Box, Card, List, ListItem, ListItemAvatar, ListItemText, Avatar, Typography, Divider } from '@mui/material'
import { useRouter } from 'next/navigation'
import { chatThreads } from '@/data/chats'

const ChatInbox = () => {
  const router = useRouter()

  const handleChatClick = (chatId: number) => {
    router.push(`/chat/thread/${chatId}`)
  }

  return (
    <Box className='p-6'>
      <Typography variant='h5' className='mb-6'>Message Center</Typography>
      <Card>
        <List>
          {chatThreads.map((chat, index) => (
            <Box key={chat.id}>
              <ListItem 
                button 
                onClick={() => handleChatClick(chat.id)}
                sx={{ '&:hover': { backgroundColor: 'action.hover' } }}
              >
                <ListItemAvatar>
                  <Avatar src={chat.avatar} alt={chat.name} />
                </ListItemAvatar>
                <ListItemText
                  primary={chat.name}
                  secondary={chat.lastMessage}
                  secondaryTypographyProps={{ noWrap: true }}
                />
                <Typography variant='caption' color='text.secondary'>{chat.time}</Typography>
              </ListItem>
              {index < chatThreads.length - 1 && <Divider />}
            </Box>
          ))}
        </List>
      </Card>
    </Box>
  )
}

export default ChatInbox
