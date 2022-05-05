import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'



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
                'X-RapidAPI-Key': '8285f13503mshfc7480185ec1d56p1bee4ajsn936e2203ec27'
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

    let x = results.results?.map(function (i) {
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
                <button type='submit' onClick={onSubmit}>Submit</button>
            </form>
            <div>
                {x}

            </div>

        </div>
    )
}

export default SearchMovies;