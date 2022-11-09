import { useState } from 'react'
import { useDispatch} from 'react-redux';
import { deleteAthlete} from '../../../../../features/athletes/athletesSlice'
import { AthleteForm } from '../AthleteForm/AthleteForm'
import useAtheletes from '../../../../../features/athletes/athletesHooks'


export const ManageAthletes = () => {

  const {athletesState} = useAtheletes()
  const [viewForm, setViewForm] = useState(false)
  const [athlete, setAthlete] = useState(null)

  const dispatch = useDispatch()

  const handleNewClick = () => {
    setViewForm(true)
  }
  const handleDeleteClick = (id) => {
    dispatch(deleteAthlete(id))
  }

  const handleEditClick = (athlete) => {
    setAthlete(athlete)
    setViewForm(!viewForm)
  }

  return (
    <>
       <h1>Manage users</h1>
       {viewForm ? <AthleteForm athlete={athlete}/> : ''}
       <div><button onClick={handleNewClick}>new</button></div>
       <table styles={{textAlign: 'center'}}>
          <thead>
            <tr>
              <td>ID</td>
              <td>NAME</td>
              <td>SURNAME</td>
              <td>AGE</td>
              <td>GENDER</td>
              <td>POINTS</td>
              <td>actions</td>
            </tr>
          </thead>
          <tbody>
          {athletesState.map(athlete => {
            return (
              <tr key={athlete.id}>
                <td>{athlete.id}</td>
                <td>{athlete.name}</td>
                <td>{athlete.surname}</td>
                <td>{athlete.year}</td>
                <td>{athlete.gender}</td>
                <td>{athlete.points}</td>
                <td>
                  <button>View</button>
                  <button onClick={() => handleDeleteClick(athlete.id)}>Delete</button>
                  <button onClick={() => handleEditClick(athlete)}>Edit</button>
                </td>
              </tr>
            )
          })}
        </tbody>
       </table>
       <div><button onClick={handleNewClick}>new</button></div>
    </>
  )
}
