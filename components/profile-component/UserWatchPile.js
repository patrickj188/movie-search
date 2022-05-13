import React from "react";
import SaveCard from "./SaveCard";


const ProfileTabs = ({ userMovies }) => {

    let rendersMovies = userMovies.movies.map((movie) => {
        return <SaveCard title={movie.title} img={movie.img} year={movie.year} crew={movie.crew} imdbRating={movie.imdbRating}></SaveCard>
    })


    return (
        <div>
            {rendersMovies}
        </div>
    )
}

export default ProfileTabs;