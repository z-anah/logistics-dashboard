'use client'

import { Box, Card, TextField, Button, Typography, Avatar, Chip, Stack } from '@mui/material'
import { useParams } from 'next/navigation'
import { getThreadById } from '@/data/chats'
import { useState } from 'react'

const ChatThread = () => {
  const params = useParams()
  const threadId = parseInt(params.id as string)
  const thread = getThreadById(threadId)
  const [messageInput, setMessageInput] = useState('')
  const [localMessages, setLocalMessages] = useState(thread?.messages || [])

  const suggestions = [
    'Package has been picked up',
    'On my way to delivery location',
    'Delivery completed successfully',
    'There might be a slight delay',
    'Customer not available'
  ]

  const handleSuggestionClick = (suggestion: string) => {
    const newMessage = {
      id: localMessages.length + 1,
      sender: 'You',
      message: suggestion,
      time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' })
    }

    setLocalMessages([...localMessages, newMessage])
  }

  if (!thread) {
    return <Box className='p-6'>Thread not found</Box>
  }

  const handleSendMessage = () => {
    if (!messageInput.trim()) return

    const newMessage = {
      id: localMessages.length + 1,
      sender: 'You',
      message: messageInput,
      time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' })
    }

    setLocalMessages([...localMessages, newMessage])
    setMessageInput('')
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <Box className='p-6'>
      <Card sx={{ height: 'calc(100vh - 200px)', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar src={thread.avatar} />
            <Typography variant='subtitle1'>{thread.name}</Typography>
          </Box>
        </Box>

        <Box sx={{ p: 3, flexGrow: 1, overflowY: 'auto' }}>
          {localMessages.map(msg => (
            <Box
              key={msg.id}
              sx={{
                display: 'flex',
                justifyContent: msg.sender === 'You' ? 'flex-end' : 'flex-start',
                mb: 2
              }}
            >
              <Box
                sx={{
                  maxWidth: '70%',
                  bgcolor: msg.sender === 'You' ? 'primary.main' : 'secondary.main',
                  color: msg.sender === 'You' ? 'text.primary' : 'text.secondary',
                  borderRadius: 2,
                  p: 2
                }}
              >
                <Typography variant='body2'>{msg.message}</Typography>
                <Typography variant='caption' color={msg.sender === 'You' ? 'text.primary' : 'text.secondary'}>
                  {msg.time}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
          <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
            {suggestions.map((suggestion, index) => (
              <Chip
                key={index}
                label={suggestion}
                onClick={() => handleSuggestionClick(suggestion)}
                sx={{ cursor: 'pointer' }}
                variant="outlined"
                size="small"
              />
            ))}
          </Stack>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
              fullWidth
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder='Type a message...'
              variant='outlined'
              size='small'
            />
            <Button 
              variant='contained'
              onClick={handleSendMessage}
              disabled={!messageInput.trim()}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Card>
    </Box>
  )
}

export default ChatThread
