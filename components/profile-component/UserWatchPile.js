import React from "react";
import SaveCard from "./SaveCard";


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
        <div>
            {rendersMovies}
        </div>
    )
}

export default ProfileTabs;