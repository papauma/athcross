import { Link } from 'react-router-dom'
import './NavBarF.css'

export const NavBarF = () => {
  return (
    <>
        <ul className='navBarF'>
            <li className='navBarF_item'><Link to='/'>Home</Link></li>
            <li className='navBarF_item'><Link to='/'>Athletes</Link></li>
            <li className='navBarF_item'><Link to='/'>Calendar</Link></li>
            <li className='navBarF_item'><Link to='/'>Statistics</Link></li>
            <li className='navBarF_item'><Link to='/'>Insights</Link></li>
            <li className='navBarF_item'><Link to='/backOffice'>Private</Link></li>
        </ul>    
    </>
  )
}
