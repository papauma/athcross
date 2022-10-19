import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { login } from '../../../../../features/users/userActive';

import './LoginForm.css'

export const LoginForm = () => {
    const userActiveState = useSelector(state => state.userActive)
    const dispatch = useDispatch()

    const [user, setUser] = useState({})

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login(user))
    }

    return (
        <>
        <div className='LoginForm__layer'></div>
            <div className='LoginForm__form'>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input type="text" name="user" id="user" placeholder='User...' onChange={(e)=>handleChange(e)}/>
                    <input type="password" name="pass" id="pass" placeholder='Pass..' onChange={(e)=>handleChange(e)}/>
                    <button>Login</button>
                </form>
            </div>
        </>
    )
}
