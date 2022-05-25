import { style } from "@mui/system";
import React from "react";
import SaveCard from "./SaveCard";
import styles from './UserWatchPile.module.css'


const ProfileTabs = ({ userMovies }) => {

    let rendersMovies = userMovies.movies.map((movie) => {
        return <div key={movie.id}>
            <SaveCard
                title={movie.title}
                img={movie.img}
                year={movie.year}
                crew={movie.crew}
                imdbRating={movie.imdbRating}
                id={movie.id}
            >
            </SaveCard>
        </div>
    })


    return (
        <div className={styles.container}>
            <div className={styles.cardGrid}>
                {rendersMovies}
            </div>
        </div>
    )
}

export default ProfileTabs;