import React, { useState } from 'react';
import { TextField, Box, Rating, Container, Typography } from '@mui/material';
import axios from 'axios';
import FilledButton from '../UI/Buttons/FilledButton';


function GetReviews() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState(4);
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Manual form validation
        if (!title || !description || !email) {
            alert("Please fill out all fields.");
            return;
        }
          // Simple email validation
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(email)) {
              alert("Please enter a valid email address.");
              return;
          }
    
        const reviewData = {
            title: title,
            description: description,
            rating: rating,
            email: email,
        };
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('rating', rating);
        formData.append('email', email);
        console.log("test",formData);
        
        axios.post('https://octathorn.com/api/reviews', reviewData)
            .then(response => {
                console.log(response.data);
                alert("Review Submitted. Thanks!");
                // Handle successful submission
            })
            .catch(error => {
                console.error(error);
                alert("Error submitting review. Please try again.");
                // Handle error during submission
            });
    };
    

    return (
        <Container maxWidth="sm" sx={{ backgroundColor: '#F5F5F5', borderRadius: '10px', padding: '20px', marginTop: '20px' }}>
        <Box
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                '& .MuiTextField-root': { m: 1, width: '100%' },
                color: '#1B2231',
            }}
            noValidate
            autoComplete="off"
        >
            <Typography variant="h4" sx={{ color: '#0E4366', marginBottom: '20px' }}>Submit a Review</Typography>
            <TextField
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                
            />
            <TextField
                label="Description"
                multiline
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            
            />
            <TextField
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                
            />
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating
                    name="simple-controlled"
                    value={rating}
                    onChange={(event, newValue) => {
                        setRating(newValue);
                    }}
                    sx={{ color: '#0E4366' }}
                />
            </Box>
            {/* <Button onClick={handleSubmit} sx={{ backgroundColor: '#0E4366', color: '#1B2231' }}>Submit</Button> */}
            <FilledButton onClick={handleSubmit} text="Submit" />
        </Box>
        <Typography variant="body2" sx={{ color: '#1B2231', marginTop: '20px', textAlign: 'center' }}>© 2023 All Rights Reserved - octathorn.com</Typography>
        </Container>
    );
}

export default GetReviews;