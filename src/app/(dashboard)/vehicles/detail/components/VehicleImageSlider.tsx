'use client'

import { useState } from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'

interface VehicleImageSliderProps {
  images: string[]
}

export default function VehicleImageSlider({ images }: VehicleImageSliderProps) {
  const [currentImage, setCurrentImage] = useState(0)

  return (
    <Card sx={{ position: 'relative', mb: 2 }}>
      <CardMedia
        component="img"
        image={images[currentImage]}
        alt="Vehicle"
        sx={{ 
          height: 400,
          objectFit: 'cover',
          borderRadius: 1
        }}
      />
      <Box sx={{
        position: 'absolute',
        bottom: 20,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: 1,
        bgcolor: 'rgba(0,0,0,0.5)',
        borderRadius: 2,
        p: 1
      }}>
        {images.map((img, index) => (
          <Box
            key={index}
            component="img"
            src={img}
            onClick={() => setCurrentImage(index)}
            sx={{
              width: 60,
              height: 60,
              borderRadius: 1,
              cursor: 'pointer',
              opacity: currentImage === index ? 1 : 0.6,
              transition: 'opacity 0.2s',
              '&:hover': { opacity: 1 }
            }}
          />
        ))}
      </Box>
      <IconButton
        sx={{
          position: 'absolute',
          left: 16,
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'rgba(255,255,255,0.8)',
          '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' }
        }}
        onClick={() => setCurrentImage(prev => (prev > 0 ? prev - 1 : images.length - 1))}
      >
        <i className="ri-arrow-left-s-line" />
      </IconButton>
      <IconButton
        sx={{
          position: 'absolute',
          right: 16,
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'rgba(255,255,255,0.8)',
          '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' }
        }}
        onClick={() => setCurrentImage(prev => (prev < images.length - 1 ? prev + 1 : 0))}
      >
        <i className="ri-arrow-right-s-line" />
      </IconButton>
    </Card>
  )
}
