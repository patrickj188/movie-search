
import React, { useState, useEffect } from "react";
import SaveCard from "./SaveCard";
import style from './UserWatchPile.module.css'
import axios from "axios";
import { Navbar, ScrollArea, AppShell, } from '@mantine/core';
import MovieInfo from "./MovieInfo";


const ProfileTabs = ({ userMovies }) => {
    const [movie, setMovie] = useState('');
    const [results, setResults] = useState([])
    const [isLoading, setLoading] = useState()

    useEffect(() => {

        const options = {
            method: 'GET',
            url: `https://imdb-api.com/en/API/Title/${process.env.NEXT_PUBLIC_API_KEY}/${movie}/FullActor,FullCast,Posters,Trailer,Ratings,Wikipedia,`,
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const search = async () => {
            await axios.request(options).then((response) => {
                setResults(response.data)
                console.log(response.data)
                setLoading(false)
            }).catch(function (error) {
                console.error(error);
            });
        }

        if (movie && !results.length) {
            search()
        }

    }, [movie])

    const movieInfo = (movie) => {
        setMovie(movie)
        console.log(movie)
        console.log(results)

    }


    let rendersMovies = userMovies.movies.map((movie) => {
        return <div key={movie.id}>
            <SaveCard
                title={movie.title}
                img={movie.img}
                year={movie.year}
                crew={movie.crew}
                imdbRating={movie.imdbRating}
                id={movie.id}
                movieId={movie.movieId}
                movieInfo={movieInfo}
            >
            </SaveCard>
        </div>
    })


    return (
        <div className={style.container}>
            <AppShell

                navbar={
                    <Navbar height={900} p="xs" width={{ base: 500 }} styles={{ background: "#F1EEE9" }}>
                        <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
                            {rendersMovies}
                        </Navbar.Section>

                    </Navbar>}
            >
                <div >
                    <MovieInfo 
                    title={results.title}
                    rating={results.imDbRating}
                    image={results.image}
                    describtion={results.plot}
                    />
                </div>
            </AppShell>

        </div>
    )
}

export default ProfileTabs;