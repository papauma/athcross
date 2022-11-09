import useAtheletes from '../../../../../features/athletes/athletesHooks'

import './TopThree.css'

const NUM_TOP = 3

export const TopThree = () => {
  let {athletesState} = useAtheletes()
  if (athletesState.length) {
        athletesState = athletesState.slice(0,athletesState.length).sort((a,b) => b.points - a.points).slice(0,NUM_TOP)

  }
  return (
    athletesState.length ? <div className='TopThree'>
        <h2 className='TopThree__title'>TopThree</h2>
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Surname</td>
                    <td>Points</td>
                </tr>
            </thead>
            <tbody>
            {athletesState.map((athlete) => {
                return (<tr key={athlete.id}>
                    <td>{athlete.name}</td>
                    <td>{athlete.surname}</td>
                    <td>{athlete.points}</td>
                </tr>)
                })}
            </tbody>
        </table>
    </div> : ''
  )
}
