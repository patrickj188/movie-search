
import React, { useState, useEffect } from "react";
import SaveCard from "./SaveCard";
import style from './UserWatchPile.module.css'
import axios from "axios";
import { Navbar, ScrollArea, AppShell, } from '@mantine/core';
import MovieInfo from "./MovieInfo";


const ProfileTabs = ({ userMovies }) => {
    const [movie, setMovie] = useState(userMovies.movies[0].movieId);
    const [results, setResults] = useState([])
    const [isLoading, setLoading] = useState()
    const [trailerLink, setTrailerLink] = useState("#")

    useEffect(() => {

        const options = {
            method: 'GET',
            url: `http://www.omdbapi.com/?i=${movie}&apikey=${process.env.NEXT_PUBLIC_API_KEY}&plot=full`,
            // url: `https://imdb-api.com/en/API/Title/${process.env.NEXT_PUBLIC_API_KEY_IMDB}/${movie}/FullActor,FullCast,Posters,Trailer,Ratings,Wikipedia,`,
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
            search()


    }, [movie])

    const movieInfo = (data) => {
        setMovie(data)
        console.log(data)

    }


    let rendersMovies = userMovies.movies.map((movie) => {
        return <div key={movie.imdbID}>
            <SaveCard
                title={movie.title}
                img={movie.img}
                year={movie.year}
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
                        title={results.Title}
                        rating={results.imdbRating}
                        image={results.Poster}
                        describtion={results.Plot}
                        director={results.Director}
                        rated={results.Rated}
                        runtime={results.Runtime}
                        writer={results.Writer}
                        actors={results.Actors}
                        trailer={trailerLink}
                    />
                </div>
            </AppShell>

        </div>
    )
}

export default ProfileTabs;