import './App.css';
import AhtletesList from './app/components/AhtletesList/AhtletesList';
import { AthleteForm } from './app/components/AthleteForm/AthleteForm';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './app/apps/front/components/Home/Home';
import { BackOffice } from './app/apps/back/components/BackOffice/BackOffice';
import { ManageUsers } from './app/apps/back/components/ManageUsers/ManageUsers';
import { useSelector } from 'react-redux';
import { NavBar } from './app/apps/common/components/NavBar/NavBar';
import { UserConfig } from './app/apps/back/components/UserConfig/UserConfig';
import { UserStatistics } from './app/apps/back/components/UserStatistics/UserStatistics';


function App() {

  const userActiveState = useSelector(state => state.userActive)
  const renderNav = () => {
    console.log(['nav',userActiveState])

    return (
      <nav>
          <ul>
          <li>{!userActiveState.user && userActiveState.user !== '' ? <Link to='/backOffice'>Acceso usuarios</Link> : <b>{userActiveState.user}</b>}</li>
          </ul>
        </nav>
    )
  }

    return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/backOffice" element={<BackOffice />  }>
            <Route path="/backOffice/athletes" element={<ManageUsers />  } />
            <Route path="/backOffice/userConfig" element={<UserConfig />  } />
            <Route path="/backOffice/userStadistics" element={<UserStatistics />  } />
          </Route>
          <Route path="/location" element={< location />} />
        </Routes>
{/*
        <div className="App">
          <h1>Hello World!!</h1>
          <AthleteForm />
          <AhtletesList />
    </div> */}
      </BrowserRouter>
  );
}

export default App;
