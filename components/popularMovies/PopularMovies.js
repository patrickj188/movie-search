import { useState, useEffect } from "react";
import axios from 'axios'
import MovieCard from "../cards/MovieCard";
import styles from './PopularMovies.module.css'
import populareMovieData from './popularedata.json'
// import popularTvData from './popularTvData.json'
import Typography from '@mui/material/Typography';

import { buildMovieFromJson } from '../../util/builders'


const PopularMovies = () => {
    const [popularMovies, setPopularMovies] = useState([])
    // const [popularTv, setPopularTv] = useState(popularTvData.items)

    useEffect(() => {
        setPopularMovies(populareMovieData.items.map(buildMovieFromJson))
    }, []);

    return (
        <div className={styles.container}>
            <Typography variant="h3" component="div" gutterBottom className={styles.heading}>
                Popular Movies
            </Typography>
            <div className={styles.section}>
                <div className={styles.posters}>
                    {popularMovies.slice(0, 10).map((movie, index) => {
                        return <MovieCard
                            // title={movie.title}
                            // img={movie.image}
                            // year={movie.year}
                            // rank={movie.rank}
                            // crew={movie.crew}
                            // imdbRating={movie.imDbRating}
                            // movieId={movie.id}
                            
                            key={index}
                            movie={movie}
                        />
                    })}
                </div>
            </div>
            <Typography variant="h3" component="div" gutterBottom className={styles.heading}>
                Trending Movies
            </Typography>
            <div className={styles.section}>
                <div className={styles.posters}>
                    {popularMovies.slice(10, 20).map((movie, index) => {
                        return <MovieCard
                            // title={movie.title}
                            // img={movie.image}
                            // year={movie.year}
                            // rank={movie.rank}
                            // crew={movie.crew}
                            // imdbRating={movie.imDbRating}
                            // movieId={movie.id}
                            key={index}
                            movie={movie}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}


export default PopularMovies;