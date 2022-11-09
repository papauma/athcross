import useAtheletes from '../../../../../features/athletes/athletesHooks'

import './Fittest.css'

export const Fittest = (props) => {
  let {athletesState} = useAtheletes()
  if (athletesState.length) {
     athletesState = athletesState.slice(0,athletesState.length).filter((athlete) => athlete.gender.toLowerCase() === props.gender.toLowerCase()).slice(0,1)[0]
  }
  return (
    <div className='Fittest'>
        <h2 className='Fittest__title'>Fittest {props.gender}</h2>
        <div>
            <div>Name: {athletesState.name}</div>
            <div>Surname: {athletesState.surname}</div>
            <div>Points: {athletesState.points} points</div>
        </div>
    </div>
  )
}
