import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddItemModal from './AddItemModal';

const Container = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAdd = (item) => {
    // Add your logic here to handle the addition of the item
    console.log('Adding item:', item);
    // For now, just close the modal
    setIsModalOpen(false);
  };

  return (
    <Card style={{ marginTop: '20px', width: '1900px', height: '300px', position: 'relative', borderRadius: '20px' }}>
      <CardMedia
        component="img"
        height="100%"
        width="100%"
        image="/container.jpg"
        alt="Image"
        style={{ objectFit: 'cover' }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '30%',
          background: 'linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)',
        }}
      ></div>
      <CardContent
        style={{
          position: 'absolute',
          top: '50%',
          left: '10%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
        }}
      >
        <Typography variant="h5">Hi! James Doe</Typography>
        <Typography variant="body1" style={{ marginTop: '20px' }}>
          Lorem Ipsum is simply dummy text
        </Typography>
        <Button
          onClick={() => setIsModalOpen(true)}
          variant="contained"
          style={{ backgroundColor: '#7c57ff', marginTop: '20px', borderRadius: '20px' }}
        >
          Add Check-in
        </Button>
        <AddItemModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAdd={handleAdd} />
      </CardContent>
    </Card>
  );
};

export default Container;
