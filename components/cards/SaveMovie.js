import { useRouter } from 'next/router';
import BasicModal from './BasicModal';
import { Fragment } from 'react';

function SaveMovie() {
    const router = useRouter()

    async function addMovieToPile(movieData) {
        const response = await fetch('/api/addToPile', {
            method: 'POST',
            body: JSON.stringify(movieData),
            headers: {
                'content-Type': 'application/json'
            }
        });

        const data = await response.json();
        console.log(data)

        // router.push('/')

    }

    return (
        <Fragment>
            <BasicModal addToPile={addMovieToPile} />
        </Fragment>
    )
}

export default SaveMovie;