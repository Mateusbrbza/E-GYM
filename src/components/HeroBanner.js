import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/banner3.jpg';

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: '200px', xs: '60px'},
      ml: { sm: '50px'}
      }} 
      position="relative" 
      p="20px" 
    >

      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Clube Fitness
      </Typography>

      <Typography 
      fontWeight={600} 
      sx={{ fontSize: { lg: '44px', xs: '40px' } 
      }} 
      mb="23px" 
      mt="30px"
      >
        Exercitar, Suar, <br /> Repetir
      </Typography>

      <Typography fontSize="22px" LineHeight="35px" mb={3} fontFamily="Alegreya" >
        Confira os melhores exercicios <br /> para se praticar
      </Typography>

      <Button variant="contained" color="error" href="#exercises" 
      sx={{ backgroundColor: '#FF2625', padding: '10px'}}
      >
        Ver exercicios
      </Button>

      <Typography
      fontWeight={600} 
      color="#FF2625" 
      sx={{ opacity: '0.1', 
      display: { lg: 'block', xs: 'none' }, 
      }} 
      fontSize="200px"
      >
        Exercite-se
      </Typography>
      
      <img 
      src={HeroBannerImage} 
      alt="hero-banner" 
      class="hero-banner-img"
      />
    </Box>
  )
}

export default HeroBanner;

