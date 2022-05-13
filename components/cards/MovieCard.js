import style from './MovieCard.module.css'
import BasicModal from './BasicModal';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SaveButton from './SaveButton';


export default function MovieCard({ title, img, year, id, rank, crew, imdbRating, }) {
  const theme = useTheme();

  async function addMovieToPile(movieData) {
    const response = await fetch('/api/addToPile', {
        method: 'POST',
        body: JSON.stringify(movieData),
        headers: {
            'content-Type': 'application/json'
        }
    });

    const data = await response.json();
    console.log(data)

    // router.push('/')

}


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
          {/* <BasicModal
            year={year}
            title={title}
            img={img}
            rank={rank}
            crew={crew}
            imdbRating={imdbRating}
          /> */}
          <SaveButton size="large" 
          addToPile={addMovieToPile}
          year={year}
          title={title}
          img={img}
          rank={rank}
          crew={crew}
          imdbRating={imdbRating}
          >Add to Pile</SaveButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={img}
        alt="Live from space album cover"
      />
    </Card>
  );
}
