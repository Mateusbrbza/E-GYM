import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [ exercises, setExercises] = useState([]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises 
      setExercises={setExercises} 
      bodyPart={bodyPart} 
      setBodyPart={setBodyPart} 
      />
      <Exercises
      setExercises={setExercises} 
      bodyPart={bodyPart} 
      setBodyPart={setBodyPart} 
      />
    </Box>
  )
}

// poderia usar context api, mas nao seria necessario ja que sao apenas dois componentes

export default Home;