import React from 'react'
import { useSelector } from 'react-redux';

import './NavBar.css'
import { Link } from 'react-router-dom';

export const NavBar = () => {
    const userActiveState = useSelector(state => state.userActive)
    console.log(['nav',userActiveState])
    return (
        <nav className='NavBar'>
            <ul className='NavBar__list'>
                <li>{!userActiveState.user && userActiveState.user !== '' ? <Link to='/backOffice'>Acceso usuarios</Link> : <b>{userActiveState.user}</b>}</li>
            </ul>
        </nav>
    )
}
