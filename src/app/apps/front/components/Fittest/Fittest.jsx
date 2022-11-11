
import './Fittest.css'

export const Fittest = (props) => {
  let listAthletes = props.listAthletes
  if (listAthletes.length) {
     listAthletes = listAthletes.slice(0,listAthletes.length).filter((athlete) => athlete.gender.toLowerCase() === props.gender.toLowerCase()).slice(0,1)[0]
  }
  return (
    <div className='Fittest'>
        <h2 className='Fittest__title'>Fittest {props.gender}</h2>
        <div>
            <div>Name: {listAthletes.name}</div>
            <div>Surname: {listAthletes.surname}</div>
            <div>Points: {listAthletes.points} points</div>
        </div>
    </div>
  )
}
