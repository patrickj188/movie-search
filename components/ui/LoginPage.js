import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import style from '../Layout.module.css'
import { UserCircle } from 'tabler-icons-react';



const LoginPage = () => {
    const { data: session, status } = useSession();
    if (session) {
        return (
            <div className={style.login}>
                <div>
                    <Link href='/profile' >
                        <a className=""> <UserCircle
                            size={30}
                            strokeWidth={1}
                            color={'black'}
                        /></a>
                    </Link>

                </div>
                <div>
                    <button onClick={() => signOut()}>Sign Out</button>
                </div>
            </div>
        );
    }

    return (
        <>
            <button onClick={() => signIn()}>Sign in</button>

        </>
    )
}

export default LoginPage