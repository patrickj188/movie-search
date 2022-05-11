import { useState } from "react";
import React from "react";
import Paper from '@mui/material/Paper'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PopularMovies from "../popularMovies/PopularMovies";

const ProfileTabs = () => {
    const [value, setValue] = useState(0);

    const valueSwitch = (value) => {
        switch (value) {
            case 0:
                return `Tab number ${value}`;


            case 1:
                return `Tab number ${value}`;



            case 2: `Tab number ${value}`;
                return <PopularMovies />;


            default: `Tab number`;
                return `Tab number`;

        }


    }

    return (
        <div>
            <Paper square>
                <Tabs
                    value={value}
                    textColor="primary"
                    indicatorColor="primary"
                    onChange={(event, newValue) => {
                        setValue(newValue);
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

export default ProfileTabs;