import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'
import style from './SearchMovies.module.css'



const SearchMovies = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [movie, setMovie] = useState('');
    const [results, setResults] = useState([])

    useEffect(() => {

        const options = {
            method: 'GET',
            url: `https://moviesdatabase.p.rapidapi.com/titles/search/title/${movie}`,
            params: { info: 'mini_info', limit: '4', page: '1', titleType: 'movie' },
            headers: {
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
                'X-RapidAPI-Key': process.env.API_KEY
            }
        };

        const search = async () => {
            await axios.request(options).then(function (response) {
                console.log(response.data);
                setResults(response.data)
            }).catch(function (error) {
                console.error(error);
            });
        }


        if (movie && !results.length) {
            search()
        }

    }, [movie])

    const onSubmit = (e) =>{
        e.preventDefault();
        setMovie(searchTerm)
    }

    let movieSearchResults = results.results?.map(function (i) {
            return (
            <div key={i.id}>
                  <MovieCard 
                  title={i.titleText.text} 
                  img={i.primaryImage.url}  
                  actors={i.primaryImage.caption.plainText} 
                  />
                </div>
            )
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