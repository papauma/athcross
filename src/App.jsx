import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BackOffice } from './app/apps/back/BackOffice';
import { ManageAthletes } from './app/apps/back/components/ManageAthletes/ManageAthletes';
import { UserConfig } from './app/apps/back/components/UserConfig/UserConfig';
import { UserStatistics } from './app/apps/back/components/UserStatistics/UserStatistics';
import Front from './app/apps/front/Front';

import './App.css';

function App() {

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Front />} />
          <Route path="/backOffice" element={<BackOffice />  }>
            <Route path="/backOffice/athletes" element={<ManageAthletes />  } />
            <Route path="/backOffice/userConfig" element={<UserConfig />  } />
            <Route path="/backOffice/userStadistics" element={<UserStatistics />  } />
          </Route>
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
