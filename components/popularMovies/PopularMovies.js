import { useState, useEffect } from "react";
import axios from 'axios'
import MovieCard from "../MovieCard";
import styles from './PopularMovies.module.css'


const PopularMovies = () => {
    const [popularMovies, setPopularMovies] = useState([])

    useEffect(() => {

        const options = {
            method: 'GET',
            url: `https://imdb-api.com/en/API/MostPopularMovies/${process.env.NEXT_PUBLIC_API_KEY}`,
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const search = async () => {
            await axios.request(options).then((response) => {
                console.log(response.data);
                setPopularMovies(response.data.items)
            }).catch(function (error) {
                console.error(error);
            });
        }
        search()

    }, [])

    let popularMovieResults = popularMovies.map(function (movie) {
        return (<div key={movie.id}>
            <MovieCard
                title={movie.title}
                img={movie.image}
                year={movie.year}
            />
        </div>)

    }, [])






    return (
        <div>
            <div className={styles.cardGrid}>
                {popularMovieResults}
            </div>
        </div>
    )
}


export default PopularMovies;