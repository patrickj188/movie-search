import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MovieCard from "./cards/MovieCard"
import style from './SearchMovies.module.css'



const SearchMovies = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [movie, setMovie] = useState('');
    const [results, setResults] = useState([])

    useEffect(() => {

        const options = {
            method: 'GET',
            url: `https://imdb-api.com/en/API/Search/${process.env.NEXT_PUBLIC_API_KEY}/${movie}`,
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const search = async () => {
            await axios.request(options).then((response) => {
                console.log(response.data);
                setResults(response.data)
            }).catch(function (error) {
                console.error(error);
            });
        }


        if (movie && !results.length) {
            search()
        }

    })

    const onSubmit = (e) => {
        e.preventDefault();
        setMovie(searchTerm)
    }

    let movieSearchResults = results.results?.map(function (i) {
        return (<div key={i.id}>
            <MovieCard
                title={i.title}
                img={i.image}
                year={i.description}
            />
        </div>)

    })


    return (
        <div>
            <form >
                <label>Enter Movie</label>
                <input
                    className="input"
                    type='text'
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <button type='submit' onClick={onSubmit}>Search</button>
            </form>
            <div className={style.cardGrid}>
                {movieSearchResults}

            </div>

        </div>
    )
}

export default SearchMovies;