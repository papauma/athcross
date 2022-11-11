
import useAtheletes from './../../../features/athletes/athletesHooks';
import { Fittest } from './components/Fittest/Fittest';
import { Home } from './components/Home/Home';
import { NavBarF } from './components/NavBarF/NavBarF';
import { TopThree } from './components/TopThree/TopThree';
import { useDispatch, useSelector } from 'react-redux';

import './Front.css'

const Front = () => {
  const {athletesState} = useAtheletes()
  //const athletesState = useSelector(state => state.athletes)
  console.log(athletesState)
  return (
    <>
      <Home />
      <NavBarF />
      <TopThree listAthletes={athletesState} />
      <div className='Front_tableListsAtheletes'>{athletesState.length ?
      <table>
        <thead>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </thead>
        <tbody>
        {athletesState.map((athlete) => {
          return (
            <tr key={athlete.id} data-testid='athletes'>
              <td>{athlete.id}</td>
              <td>{athlete.name}</td>
              <td>{athlete.surname}</td>
              <td>{athlete.points}</td>
            </tr>
            )})}
          </tbody>
      </table> : ''}</div>
      <Fittest gender='MALE' listAthletes={athletesState} />
      <Fittest gender='FEMALE' listAthletes={athletesState} />

    </>
  )
}
export default Front;
