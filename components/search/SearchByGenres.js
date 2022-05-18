import React, { useState, useEffect } from 'react'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios'
import MovieCard from "../cards/MovieCard"

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const genres = [
    'Action',
    'Adventure',
    'Animation',
    'Biography',
    'Comedy',
    'Crime',
    'Documentary',
    'Drama',
    'Family',
    'Fantasy',
    'Film_Noir',
    'History',
    'Horror',
    'Music',
    'Musical',
    'Mystery',
    'News',
    'Romance',
    'Sci_Fi',
    'Sport',
    'Thriller',
    'War',
    'Western',
];

export default function SearchByGenres() {
    const [movieGenre, setmovieGenre] = useState([]);
    const [results, setResults] = useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setmovieGenre(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    useEffect(() => {

        const options = {
            method: 'GET',
            url: `https://imdb-api.com/API/AdvancedSearch/k_hwo94fqa?genres=${movieGenre}`,
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


        if (movieGenre && !results.length) {
            search()
        }

    }, [movieGenre])


    let movieGenreResults = results.results?.map(function (i) {
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
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={movieGenre}
                    onChange={handleChange}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    {genres.map((genre) => (
                        <MenuItem key={genre} value={genre}>
                            <Checkbox checked={movieGenre.indexOf(genre) > -1} />
                            <ListItemText primary={genre} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <di>
                {movieGenreResults}
            </di>
        </div>
    );
}
