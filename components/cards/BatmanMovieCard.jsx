import styles from './MovieCard.module.css'
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SaveButton from './SaveButton';
import { useSession } from "next-auth/react"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { ModalManager } from '@mui/material';


export default function BatmanMovieCard({ movie }) {
  const { data: session, status } = useSession()

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
  }

  return (
    <Card className={styles.movieCard} style={{ backgroundImage: `url(${movie.img})` }}>
      <div className={styles.overlayInfo}>
        <Typography variant="h4">
          {movie.title}
        </Typography>
        <Typography  variant="h6">
          {movie.year}
        </Typography>
        <Box className={styles.userControl}>
          {status === "authenticated" ? <SaveButton size="large"
            addToPile={addMovieToPile}
            year={movie.year}
            title={movie.title}
            img={movie.img}
            movieId={movie.movieId}
          />
            : ""
          }
        </Box>
      </div>

    </Card>
  );
}
