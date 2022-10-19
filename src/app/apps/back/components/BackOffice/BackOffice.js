import { useSelector } from "react-redux"
import { LoginForm } from './../LoginForm/LoginForm';
import { Link, useLocation, Outlet } from 'react-router-dom';
import {BackOfficeHeader} from '../BackOfficeHeader/BackOfficeHeader'


export const BackOffice = () => {
    const userActiveState = useSelector(state => state.userActive)
    console.log(['Login',userActiveState])
    const { pathname } = useLocation();
    console.log(pathname)

  return (
    <>
        {!userActiveState.user && userActiveState.user !== '' ?
        <LoginForm />
        :
        <div className="BackOffice">
            <BackOfficeHeader user={userActiveState.user}/>
            <Outlet />
        </div>}
    </>
  )
}
