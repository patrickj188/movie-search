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
            crew: props.crew,
            imdbRating: props.imdbRating
        };

        props.addToPile(movieData);
    }

    return <Button size="large" onClick={submitHandler}>Add to Pile</Button>
}

export default SaveButton;