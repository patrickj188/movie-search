import React, {useEffect, useState} from "react";
import style from "./MovieInfo.module.css"
import { Badge, Avatar, Center } from '@mantine/core';
import { Star, Clock, AlertTriangle } from 'tabler-icons-react';


const MovieInfo = ({ title, rating, image, describtion, trailer, director, rated, runtime, writer, actors }) => {
// const [trailerLink, setTrailerLink] = useState("#")


// useEffect((trailer) =>{
//     setTrailerLink(trailer)
//     console.log(trailerLink)
    
// }, [trailerLink])
    


    const avatar = (
        <Avatar color="orange" radius="md">
            <Star size={24} color={'#EC994B'}/>
        </Avatar>
    );
    const clock = (
        <Avatar color="orange" radius="md">
            <Clock size={24} color={'#EC994B'}/>
        </Avatar>
    );
    const alertTriangle = (
        <Avatar color="orange" radius="md">
            <AlertTriangle size={24} color={'#EC994B'}/>
        </Avatar>
    );


    return (
        <div className={style.movieInfo}>
            <div className={style.rating}>
                <Badge sx={{ paddingLeft: 0 }} size="xl" radius="xl" color="indigo" leftSection={avatar}>
                    {rating}
                </Badge>
                <Badge sx={{ paddingLeft: 0 }} size="xl" radius="xl" color="indigo" leftSection={alertTriangle}>
                    {rated}
                </Badge>
                <Badge sx={{ paddingLeft: 0 }} size="xl" radius="xl" color="indigo" leftSection={clock}>
                    {runtime}
                </Badge>
 
            </div>
            <div className={style.header}>
                <p>{title}</p>
            </div>
            <div className={style.container}>
                <img className={style.img} src={image} />
                <div className={style.textContainer}>
                    <p className={style.text}>
                        {describtion}
                    </p>
                <p className={style.text}>
                        Director: {director} 
                    </p>
                    <p className={style.text}>
                        Actors: {actors} 
                    </p>
                    <p className={style.text}>
                        Writers: {writer} 
                    </p>
                    <p className={style.text}>
                        Rating: {rated} 
                    </p>
                    <p className={style.text}>
                        Runtime: {runtime} 
                    </p>
                </div>
            </div>
            <div style={{ width: 600, paddingTop: 100, margin: 'auto' }}>
                <Badge style={{ margin: 5 }} component="a" href={trailer} target="_blank" variant="outline">
                    IMDB
                </Badge>
                <Badge style={{ margin: 5 }} component="a" href={trailer} target="_blank" variant="outline">
                    Trailer
                </Badge>
                <Badge style={{ margin: 5 }} component="a" href="https://mantine.dev" target="_blank" variant="outline">
                    Wikipedia
                </Badge>
            </div>
        </div>
    )
}

export default MovieInfo;