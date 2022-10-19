import useAtheletes from '../../../../../features/athletes/athletesHooks'

import './TopThree.css'

export const TopThree = () => {
  let {athletesState} = useAtheletes()
  if (athletesState.length) {
        athletesState = athletesState.slice(0, 3)
  }
  return (
    <div className='TopThree'>
        <div>TopThree</div>
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Salary</td>
                </tr>
            </thead>
            <tbody>
            {athletesState.length ? athletesState.map((athlete) => {
                return (<tr>
                    <td>{athlete.employee_name}</td>
                    <td>{athlete.employee_salary}</td>
                </tr>)
                })
            : ''}
            </tbody>
        </table>
    </div>
  )
}
