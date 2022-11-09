
import useAtheletes from './../../../features/athletes/athletesHooks';
import { Fittest } from './components/Fittest/Fittest';
import { Home } from './components/Home/Home';
import { NavBarF } from './components/NavBarF/NavBarF';
import { TopThree } from './components/TopThree/TopThree';

import './Front.css'

const Front = () => {
  const {athletesState} = useAtheletes()
  return (
    <>
      <Home />
      <NavBarF />
      <TopThree />
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
            <tr key={athlete.id}>
              <td>{athlete.id}</td>
              <td>{athlete.name}</td>
              <td>{athlete.surname}</td>
              <td>{athlete.points}</td>
            </tr>
            )})}
          </tbody>
      </table> : ''}</div>
      <Fittest gender='MALE'/>
      <Fittest gender='FEMALE'/>

    </>
  )
}
export default Front;
