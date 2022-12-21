import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';


const Detail = ({ exerciseDetail }) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart,
        },
        {
            icon: TargetImage,
            name: target,
        },
        {
            icon: EquipmentImage,
            name: equipment,
        },
    ];


  return (
    <Stack
    gap="60px"
    sx={{flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center'
    }}>
        <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
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
            {extraDetail?.map((item) => (
          <Stack 
          key={item.name} 
          direction="row" 
          gap="24px" 
          alignItems="center"
          >
            <Button 
            sx={{ background: '#FFF2DB', borderRadius: '50%', 
            width: '100px', height: '100px' }}
            >
              <img src={item.icon} alt={bodyPart} 
              style={{ width: '50px', height: '50px' }} 
              />
            </Button>
            <Typography 
            textTransform="capitalize" 
            sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;