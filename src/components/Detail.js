import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';


const Detail = ({ exerciseDetail }) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;


  return (
    <Stack
    gap="60px"
    sx={{flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center'
    }}>
        <img src={gifUrl} alt={name} Loading="lazy" className="detail-image" />
        <Stack
        sx={{ gap: { lg: '35px', xs: '20px'}}}
        >
            <Typography variant="h3">
                {name}
            </Typography>
            <Typography variant="h6">
                Nenhum cidadão tem o direito de ser um amador 
                em matéria de treinamento físico. Que desgraça é 
                para o homem envelhecer sem nunca ver a beleza 
                e a força do que o seu corpo é capaz. <br /> -Sócrates 
                <br />
                <br />
                <b>{name}</b> é um dos melhores exercícios para o seu 
                {` `} <b>{target}</b>.
            </Typography>
        </Stack>
    </Stack>
  )
}

export default Detail;