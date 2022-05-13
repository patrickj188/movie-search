import { useState, useEffect } from "react";
import axios from 'axios'
import MovieCard from "../cards/MovieCard";
import styles from './PopularMovies.module.css'
import dummyData from './popularedata.json'


const PopularMovies = () => {
    const [popularMovies, setPopularMovies] = useState(dummyData.items)

    // useEffect(() => {



    //     const options = {
    //         method: 'GET',
    //         url: `https://imdb-api.com/en/API/MostPopularMovies/${process.env.NEXT_PUBLIC_API_KEY}`,
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     };

    //     const search = async () => {
    //         await axios.request(options).then((response) => {
    //             // console.log(response.data);
    //             setPopularMovies(response.data.items)
    //         }).catch(function (error) {
    //             console.error(error);
    //         });
    //     }
    //     search()
    //     console.log(dummyData.items)

    // }, [])

    let popularMovieResults = popularMovies.map(function (movie) {
        return (<div key={movie.id}>
            <MovieCard
                title={movie.title}
                img={movie.image}
                year={movie.year}
                rank={movie.rank}
                crew={movie.crew}
                imdbRating={movie.imDbRating}
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