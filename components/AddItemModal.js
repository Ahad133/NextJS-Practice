import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const AddItemModal = ({ isOpen, onClose, onAdd }) => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);

  const handleAdd = async () => {
    if (title && image) {
      try {
        const imageUrl = 'https://example.com/default-image.jpg'; // Replace with actual image URL

        const newItem = {
          title: title,
          imageUrl: imageUrl,
          date: new Date().toLocaleString(),
        };

        onAdd(newItem);
        onClose();
      } catch (error) {
        console.error('Error adding item:', error.message);
      }
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setImage(file);
  };

  const preventDefault = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 500,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5" gutterBottom>
          Add Check-in
        </Typography>
        <TextField
          label="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          margin="normal"
        />
        <div
          style={{
            border: '2px dashed #aaaaaa',
            padding: '20px',
            textAlign: 'center',
            cursor: 'pointer',
            marginTop: '20px',
            marginBottom: '20px',
            width: '90%',
            minHeight: '100px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onClick={() => document.getElementById('fileInput').click()}
          onDrop={handleDrop}
          onDragOver={preventDefault}
          onDragEnter={preventDefault}
          onDragLeave={preventDefault}
        >
          <CloudUploadIcon style={{ fontSize: 40, color: '#7c57ff', marginBottom: '5px' }} />
          <input
            id="fileInput"
            type="file"
            onChange={handleImageChange}
            accept="image/*"
            style={{ display: 'none' }}
          />
          <Typography variant="body1">Click or drop file anywhere in this area to upload</Typography>
          <Typography variant="body2" color="textSecondary">
            Support for single or bulk upload. Strictly prohibit from uploading company data or other banned files.
          </Typography>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: '16px',
            width: '100%',
          }}
        >
          <Button
            onClick={onClose}
            variant="outlined"
            style={{ marginRight: '8px', color: 'black', borderColor: 'grey', borderRadius: '20px' }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleAdd}
            variant="contained"
            style={{ backgroundColor: '#7c57ff', color: 'white', borderRadius: '20px' }}
            disabled={!title || !image}
          >
            Add
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default AddItemModal;
