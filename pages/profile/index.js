import { MongoClient } from "mongodb";
import { useState } from "react";
import React from "react";
import Paper from '@mui/material/Paper'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import UserWatchPile from '../../components/profile-component/UserWatchPile'
import WatchedMovies from "../../components/profile-component/WatchedMovies";

function Profile (props){
    const [value, setValue] = useState(0);

    const valueSwitch = (value) => {
        switch (value) {
            case 0:
                return <UserWatchPile userMovies={props} />;


            case 1:
                return <WatchedMovies />;



            case 2: `Tab number ${value}`;
                return `Tab number ${value}`


            default: `Tab number`;
                return `Tab number`;

        }


    }
    return (
        <div >
        <Paper square>
            <Tabs
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                style={{
                    marginTop: "110px",
                    // backgroundColor: "#F1EEE9",
                }}
                TabIndicatorProps={{
                    style: {
                      backgroundColor: "#EC994B",
                     }
                    }}
            >
                <Tab label="My Watch Pile">
                </Tab>
                <Tab label="Watched Movies" />
                <Tab label="Review" />
            </Tabs>
            <h3>{valueSwitch(value)} </h3>
        </Paper>
    </div>
    )
}

export async function getServerSideProps() {

    const client = await MongoClient.connect(process.env.MONGODB_URI)
    const db = client.db();
  
    const savedMoviesCollection = db.collection('SavedUserMovies');
  
    const savedMovies = await savedMoviesCollection.find().toArray();
  
    client.close();
  
    return {
      props: {
        movies: savedMovies.map(movie => ({
          title: movie.title,
          year: movie.year,
          img: movie.img,
          id: movie._id.toString(),
          movieId: movie.movieId
  
        }))
      },
      revalidate: 1
    };
  }


  export default Profile;