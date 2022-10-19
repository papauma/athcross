import { Link } from 'react-router-dom';

import './BackOfficeHeader.css'

export const BackOfficeHeader = (props) => {
    return (
        <>
            <h1 className="BackOfficeHeader__title">Welcome {props.user}</h1>
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