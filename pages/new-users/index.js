import { useRouter } from 'next/router';
import NewUserForm from '../../components/NewUserForm'
import Head from 'next/head'
import { Fragment } from 'react';

function NewUser() {
    const router = useRouter()

    async function addUserHandler(enteredUserData) {
        const response = await fetch('/api/new-user', {
            method: 'POST',
            body: JSON.stringify(enteredUserData),
            headers: {
                'content-Type': 'application/json'
            }
        });

        const data = await response.json();
        console.log(data)

        router.push('/')

    }

    return (
        <Fragment>
            <Head>
                <title>New User</title>
                <meta name='description' content="Movies" />
            </Head>
            <NewUserForm onAddUser={addUserHandler} />

        </Fragment>
    )
}

export default NewUser;