import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';




export default function SaveCard({ title, img, year, id, movieInfo, movieId }) {
  const theme = useTheme();
  const router = useRouter()

  async function deleteSavedMovie(id) {
    const response = await fetch(`/api/deleteMovie`, {
        method: 'DELETE',
        body: JSON.stringify(id),
        headers: {
          'Content-Type': 'application/json'
      }
    })
    console.log(id)
    const data = await response.json()
    // console.log(data)

    router.push('/profile')

  };



  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{
        width: 200,
        height: 150,
      }}>
        <CardContent>
          <Typography component="div" variant="subtitle1">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {year}
          </Typography>
        </CardContent>
        <Box sx={{ alignItems: 'center' }} mt={3} position="relative" >
        </Box>
        <button onClick={() => deleteSavedMovie(id)} >Delete</button>
        <button onClick={() => movieInfo(movieId)}>Info</button>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 150 }}
        image={img}
      />
    </Card>
  );
}
