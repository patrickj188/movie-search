import React from "react";
import style from "./MovieInfo.module.css"
import { Badge, Avatar } from '@mantine/core';
import { Star } from 'tabler-icons-react';


const MovieInfo = ({ title, rating, image, describtion}) => {

    const avatar = (
        <Avatar color="orange" radius="md">
            <Star size={24} />
        </Avatar>
    );

    return (
        <div className={style.movieInfo}>
            <div className={style.rating}>
                <Badge sx={{ paddingLeft: 0 }} size="xl" radius="xl" color="indigo" leftSection={avatar}>
                    {rating}
                </Badge>
            </div>
            <div className={style.header}>
                <div className={style.title}>
                    <hi>{title}</hi>
                </div>
                <div className={style.imgContainer}>
                    <img className={style.img} src={image} />
                </div>
            </div>
            <div>

                <p className={style.text}>
                   {describtion}
                </p>
            </div>
        </div>
    )
}

export default MovieInfo;