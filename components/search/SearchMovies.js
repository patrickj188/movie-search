import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MovieCard from "../cards/MovieCard"
import style from './SearchMovies.module.css'
import { InputAdornment } from '@mui/material';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel';
import Button from '@mui/material/Button';
import TheatersIcon from '@mui/icons-material/Theaters';
import SearchByGenres from './SearchByGenres';




const SearchMovies = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [movie, setMovie] = useState('');
    const [results, setResults] = useState([])
    const [movieGenre, setmovieGenre] = useState([]);

    useEffect(() => {

        const options = {
            method: 'GET',
            url: `https://imdb-api.com/API/AdvancedSearch/${process.env.NEXT_PUBLIC_API_KEY}?${movie}`,
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

    }, [movie])

    const onSubmit = (e) => {
        e.preventDefault();
        setMovie(`title=${searchTerm}`)
    }
    const clearDate = (e) => {
        e.preventDefault();
        setSearchTerm('')
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            onSubmit(e)
        }
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
        <div className={style.searchContainer}>
            <TextField
                placeholder="Search"
                type="text"
                variant="outlined"
                size="small"
                onChange={e => setSearchTerm(e.target.value)}
                value={searchTerm}
                onKeyDown={handleKeyPress}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start" >
                            <TheatersIcon
                               style={{
                                color: '#73777B'
                            }}
                             />
                        </InputAdornment>
                    ),
                    endAdornment: searchTerm && (

                        <IconButton
                            aria-label="toggle password visibility"
                            type="submit"
                            onClick={clearDate}
                            style={{
                                color: '#73777B'
                            }}
                        >
                            <CancelIcon /></IconButton>
                    )

                }}
            />
            <Button 
            type="submit" 
            onClick={onSubmit} 
            variant="contained" 
            style={{
                backgroundColor: "#EC994B",
                color: '#15133C'
            }}
            >
                    Search
            </Button>
            <SearchByGenres setmovieGenre={setmovieGenre}/>
            
            <div className={style.cardGrid}>
                {movieSearchResults}

            </div>

        </div>
    )
}

export default SearchMovies;