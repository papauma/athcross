import { Link } from 'react-router-dom';
import { BreadCrumb } from '../BreadCrumb/BreadCrumb';
import { useDispatch } from 'react-redux';
import { logout } from '../../../../../features/users/userActive'


import './BackOfficeHeader.css'

export const BackOfficeHeader = (props) => {
    const dispatch = useDispatch()

    const handleClickLogout = () => {
        dispatch(logout())

    }
    return (
        <>
            <h1 className="BackOfficeHeader__title">Welcome {props.user.user} <button onClick={() => handleClickLogout()} className='BackOfficeHeader__title__logout'>Logout</button></h1>
            <BreadCrumb />
            <div>Actions
                <div>
                    <nav className='BackOfficeHeader__nav'>
                        <ul className='BackOfficeHeader__navList'>
                            <li className='BackOfficeHeader__navListItem'><Link to='athletes'>Manage Athletes</Link></li>
                            <li className='BackOfficeHeader__navListItem'><Link to='userConfig'>User config</Link></li>
                            <li className='BackOfficeHeader__navListItem'><Link to='userStadistics'>User stadistics</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}