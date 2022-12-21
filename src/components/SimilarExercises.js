import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
  return (
    <Box
    sx={{ mt: {lg: '100px', xs: '0px'}}}
    >
      <Typography>Exercicios similares para o mesmo grupo muscular</Typography>
    </Box>
  )
}

export default SimilarExercises;