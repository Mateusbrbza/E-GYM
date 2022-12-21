import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
  return (
    <Box
    sx={{ mt: {lg: '100px', xs: '0px'}}}
    >
      <Typography variant="h3">
        Exercicios similares para o mesmo grupo muscular
      </Typography>
      <Stack
      direction="row"
      sx={{ p: '2', position: 'relative'}}
      >
        {targetMuscleExercises.length ? 
        <HorizontalScrollbar data={targetMuscleExercises} />
      : <Loader />  }
      </Stack>
    </Box>
  )
}

export default SimilarExercises;