import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import style from '../ui/Navbar.module.css'
import { UserCircle } from 'tabler-icons-react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



export default function LoginPage () {
    const { data: session, status } = useSession();
    const [anchorEl, setAnchorEl] =useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    if (session) {
        return (
            <div className={style.login}>
                <div>
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <a className=""> <UserCircle
                                size={60}
                                strokeWidth={1}
                                color={'#F1EEE9'}
                            /></a>
                        </Button>

                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem><Link href='/profile' > Profile </Link></MenuItem>
                            <MenuItem onClick={() => signOut()}>Logout</MenuItem>
                        </Menu>

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
