import React, { useEffect, useState} from 'react';
import { 
  Box, 
  Button, 
  Stack, 
  TextField, 
  Typography } from '@mui/material';

const SearchExercises = () => {
  return (
    <Stack alignItems="center" mt="37px"
    justifyContent="center" padding="20px"
    >
      <Typography 
      fontWeight={700}
      sx={{ fontSize: { lg: '44px', xs: '30px'}}}
      mb="50px" textAlign="center"
      >
        Exericios separados por <br /> grupos musculares
      </Typography>

      <Box position="relative" mb="72px">
        <TextField 
        sx={{
          input: { 
            fontWeight: '700', 
            border: 'none', 
            borderRadius: '5px'
          },
          width: { lg: '800px', xs: '350px'},
          backgroundColor: '#FFF', 
          borderRadius: '40px'
        }}
        height="76px"
        value=""
        onChange={(e) => {}}
        placeholder="Pesquisar exercicios"
        type="text"
        />
        <Button 
        className="search-btn"
        sx={{
          bgcolor: '#FF2625',
          color: '#fff',
          textTransform: 'none',
          width: {lg: '150px', xs: '80px'},
          fontSize: {lg: '20px', xs: '14px'},
          height: '56px',
          position: 'absolute',
          right: '0'
        }}
        >
          Pesquisar
        </Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises;