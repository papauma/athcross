import { useState } from 'react'
import { useDispatch} from 'react-redux';
import { deleteAthlete} from '../../../../../features/athletes/athletesSlice'
import { AthleteForm } from '../AthleteForm/AthleteForm'
import useAtheletes from '../../../../../features/athletes/athletesHooks'




export const ManageUsers = () => {

  const {athletesState} = useAtheletes()
  const [viewForm, setViewForm] = useState(false)

  const dispatch = useDispatch()

  const handleNewClick = () => {
    setViewForm(true)
  }
  const handleDeleteClick = (id) => {
    dispatch(deleteAthlete(id))
  }

  return (
    <>
       <h1>Manage users</h1>
       {viewForm ? <AthleteForm /> : ''}
       <div><button onClick={handleNewClick}>new</button></div>
       <table styles={{textAlign: 'center'}}>
          <thead>
            <tr>
              <td>ID</td>
              <td>NAME</td>
              <td>SALARY</td>
              <td>AGE</td>
              <td>actions</td>
            </tr>
          </thead>
          <tbody>
          {athletesState.map(athlete => {
            return (
              <tr>
                 <td>{athlete.id}</td>
                <td>{athlete.employee_name}</td>
                <td>{athlete.employee_salary}</td>
                <td>{athlete.employee_age}</td>
                <td>
                  <button>view</button>
                  <button onClick={() => handleDeleteClick(athlete.id)}>delete</button>
                  <button>edit</button>
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
