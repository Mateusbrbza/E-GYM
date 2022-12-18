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
        height="76px"
        value=""
        onChange={(e) => {}}
        placeholder="Pesquisar exercicios"
        type="text"
        />
      </Box>
    </Stack>
  )
}

export default SearchExercises;