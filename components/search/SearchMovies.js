import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MovieCard from "../cards/MovieCard"
import style from './SearchMovies.module.css'
import { InputAdornment } from '@mui/material';
import TextField from '@mui/material/TextField';
import { IconButton } from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel';
import Button from '@mui/material/Button';
import TheatersIcon from '@mui/icons-material/Theaters';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';




const SearchMovies = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [movie, setMovie] = useState('');
    const [results, setResults] = useState([])
    const [movieGenre, setmovieGenre] = useState([]);
    const [isLoading, setLoading] = useState()

    useEffect(() => {

        const options = {
            method: 'GET',
            url: `https://www.omdbapi.com/?s=${movie}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`,
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const search = async () => {
            await axios.request(options).then((response) => {
                console.log(movie);
                setResults(response.data.Search)
                setLoading(false)
                console.log(response.data.Search);
            }).catch(function (error) {
                console.error(error);
            });
        }

        search()

    }, [movie])

    const onSubmit = (e) => {
        e.preventDefault();
        setMovie(searchTerm)
        setLoading(true)
    }
    const clearDate = (e) => {
        e.preventDefault();
        setSearchTerm('')
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            onSubmit(e)
            setLoading(true)
        }
    }

    let movieSearchResults = results?.map(function (i) {
        return (<div key={i.imdbID}>
            <MovieCard
                title={i.Title}
                img={i.Poster}
                movieId={i.imdbID}
                year={i.Year}

            />
        </div>)

    })


    return (
        <div className={style.main}>
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
                    className={style.searchButton}
                    type="submit"
                    onClick={onSubmit}
                    variant="contained"
                    style={{
                        backgroundColor: "#EC994B",
                        color: '#15133C',
                    }}
                >
                    Search
                </Button>

            </div>
            <div className={style.cardGrid}>
                {isLoading === true ?
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress style={{ color: "#EC994B" }} />
                    </Box> : movieSearchResults}
            </div>

        </div>
    )
}

export default SearchMovies;