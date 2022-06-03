import Head from 'next/head'
import { useState, useEffect } from 'react'
import api from '../util/api'
import { Typography } from '@mui/material'
import { Loader } from '@mantine/core'
import MovieCard from '../components/cards/MovieCard'
import styles from '../styles/batman.module.css';
import BatmanMovieCard from '../components/cards/BatmanMovieCard'

export default function BatmanPage() {

  const [popularMovies, setPopularMovies] = useState([])
  const [trendingMovies, setTrendingMovies] = useState([])

  useEffect(() => {
      (async function () {
          // allows two requests concurrently rather than await one and then the other in sequence
          const [popular, trending] = await Promise.all([
              api.fetchMovies({ page: 1 }),
              api.fetchMovies({ page: 2 }),
          ]);
          setPopularMovies(popular);
          setTrendingMovies(trending);
      }())
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>The Watch Pile</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

            <Typography fontWeight={600} variant={'h3'} component="div" gutterBottom className={styles.heading}>
                Popular Batman Movies
            </Typography>

            <div className={styles.section}>
                <div className={styles.posters}>
                    {!popularMovies.length && (
                        <div className={styles.loading}>
                            <Loader/>
                        </div>
                    )}
                    {popularMovies.slice(0, 10).map((movie, index) => {
                        return <BatmanMovieCard
                            key={index}
                            movie={movie}
                        />
                    })}
                </div>
            </div>

            <Typography fontWeight={700} variant={'h3'} component="div" gutterBottom className={styles.heading}>
                Trending Batman Movies
            </Typography>

            <div className={styles.section}>
                <div className={styles.posters}>
                    {trendingMovies.slice(0, 10).map((movie, index) => {
                        return <BatmanMovieCard
                            key={index}
                            movie={movie}
                        />
                    })}
                </div>
            </div>
        </div>
      

  )
}
