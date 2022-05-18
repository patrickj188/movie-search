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


export default function MovieCard({ title, img, year, id, rank, crew, imdbRating, }) {
  const theme = useTheme();
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

    // router.push('/')

  }

  return (
    <Card className={styles.movieCard} style={{ backgroundImage: `url(${img})` }}>
      <div className={styles.overlayInfo}>
        <Typography variant="h4">
          {title}
        </Typography>
        <Typography  variant="h6">
          {year}
        </Typography>
        <Box className={styles.userControl}>
          {status === "authenticated" ? <SaveButton size="large"
            addToPile={addMovieToPile}
            year={year}
            title={title}
            img={img}
            rank={rank}
            crew={crew}
            imdbRating={imdbRating}
          />
            : ""
          }
        </Box>
      </div>

    </Card>
  );
}
