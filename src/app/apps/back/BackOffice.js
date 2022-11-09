import { useSelector } from "react-redux"
import { LoginForm } from './components/LoginForm/LoginForm';
import { useLocation, Outlet } from 'react-router-dom';
import {BackOfficeHeader} from './components/BackOfficeHeader/BackOfficeHeader'

export const BackOffice = () => {
    const userActiveState = useSelector(state => state.userActive)
    
    console.log(['Login',userActiveState])
    const { pathname } = useLocation();
    console.log(pathname)

  return (
    <>
        {!userActiveState || userActiveState.user.user === '' ?
        <LoginForm />
        :
        <div className="BackOffice">
            <BackOfficeHeader user={userActiveState.user}/>
            <Outlet />
        </div>}
    </>
  )
}
