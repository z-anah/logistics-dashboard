export type ChatMessage = {
  id: number
  sender: 'Driver' | 'You' | string
  message: string
  time: string
}

export type ChatThread = {
  id: number
  name: string
  avatar: string
  lastMessage: string
  time: string
  messages: ChatMessage[]
}
