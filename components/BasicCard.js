import React from 'react';
import Slider from 'react-slick';
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const cards = [
  {
    image: '/static/images/cards/contemplative-reptile.jpg',
    title: 'Lizard 1',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  },
  {
    image: '/static/images/cards/contemplative-reptile.jpg',
    title: 'Lizard 2',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  },
  {
    image: '/static/images/cards/contemplative-reptile.jpg',
    title: 'Lizard 2',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  },
  {
    image: '/static/images/cards/contemplative-reptile.jpg',
    title: 'Lizard 2',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  },
];

const BasicCard = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Adjust the number of slides to show at once
        slidesToScroll: 1,
      };
    
      return (
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div key={index}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia sx={{ height: 140 }} image={card.image} title={card.title} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </div>
          ))}
        </Slider>
  );
};

export default BasicCard;
