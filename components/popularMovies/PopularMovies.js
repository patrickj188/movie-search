import { useState, useEffect } from "react";
import axios from 'axios'
import MovieCard from "../cards/MovieCard";
import styles from './PopularMovies.module.css'
import populareMovieData from './popularedata.json'
import popularTvData from './popularTvData.json'
import Typography from '@mui/material/Typography';




const PopularMovies = () => {
    const [popularMovies, setPopularMovies] = useState(populareMovieData.items)
    const [popularTv, setPopularTv] = useState(popularTvData.items)

    return (
        <div className={styles.container}>
            <div className={styles.section}>
                <Typography variant="h3" component="div" gutterBottom>
                    Popular Movies
                </Typography>
                <div className={styles.posters}>
                    {popularMovies.slice(0, 10).map((movie, index) => {
                        return <MovieCard
                            title={movie.title}
                            img={movie.image}
                            year={movie.year}
                            rank={movie.rank}
                            crew={movie.crew}
                            imdbRating={movie.imDbRating}
                            key={index}
                        />
                    })}
                </div>
            </div>
            <div className={styles.section}>
                <Typography variant="h3" component="div" gutterBottom className={styles.headingSticky}>
                    Trending Movies
                </Typography>
                <div className={styles.posters}>
                    {popularMovies.slice(10, 20).map((movie, index) => {
                        return <MovieCard
                            title={movie.title}
                            img={movie.image}
                            year={movie.year}
                            rank={movie.rank}
                            crew={movie.crew}
                            imdbRating={movie.imDbRating}
                            key={index}
                        />
                    })}
                </div>
            </div>
            {/* <div className={styles.section}>
                <Typography variant="h3" component="div" gutterBottom>
                    Trending TV
                </Typography>
                <div className={styles.posters}>
                    {popularTv.slice(20, 30).map((tv, index) => {
                        return <MovieCard
                            title={tv.title}
                            img={tv.image}
                            year={tv.year}
                            rank={tv.rank}
                            crew={tv.crew}
                            imdbRating={tv.imDbRating}
                            key={index}
                        />
                    })}
                </div>
            </div> */}
            {/* <div className={styles.cardGrid}>
                {popularMovieResults}
            </div> */}
        </div>
    )
}


export default PopularMovies;