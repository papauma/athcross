
import useAtheletes from './../../../features/athletes/athletesHooks';
import { TopThree } from './components/TopThree/TopThree';


export const Front = () => {
  const {athletesState} = useAtheletes()
  return (
    <>
      <div>HOME</div>
      <TopThree />
      <table>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        {athletesState.length ? athletesState.map((athlete) => {
          return (
            <tr>
              <td>{athlete.id}</td>
              <td>{athlete.employee_name}</td>
              <td>{athlete.employee_salary}</td>
            </tr>
            )})
          : ''}

      </table>
    </>
  )
}
