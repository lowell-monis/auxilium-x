'use client';
import { Stack, Box } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState([{
    role: 'assistant',
    content: 'Hi! I am Auxilia, your AI assistant. How can I help you today?',
  }]);

  const [message, setMessage] = useState('');

  return <Box width = "100vw" height = "100vh" display = "flex" flexDirection="column" justifyContent="center" alignItems="center">
    <Stack
      direction="column"
      width="600px"
      height="700px"
      border="1px solid black"
      spacing={2}
      p={2}
    >
      <Stack direction="column" spacing={2} flexGrow={1} overflow="auto" maxHeight="100%">
        {
          messages.map((message, index) => (
            <Box key={index} display='flex' justifyContent={
              message.role === 'assistant' ? 'flex-start' : 'flex-end'
            }>
              <Box
                bgcolor={
                  message.role === 'assistant' ? 'primary.main' : 'secondary.main'
                }
                color='white'
                p={3}
                borderRadius={16}
              >
                {message.content}
              </Box>
            </Box>
          ))}
      </Stack>
    </Stack>
  </Box>
}
