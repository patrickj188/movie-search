import Button from '@mui/material/Button';
import { useSession } from "next-auth/react"

const SaveButton = (props) => {
    const { data: session, status } = useSession()
    function submitHandler(event) {
        event.preventDefault();


        const movieData = {
            user_id: session.id,
            title: props.title,
            img: props.img,
            year: props.year,
            movieId: props.movieId
        };

        props.addToPile(movieData);
    }

    return <Button size="large" variant="contained" onClick={submitHandler}>Save</Button>
}

export default SaveButton;