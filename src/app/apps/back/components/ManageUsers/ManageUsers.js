import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { initState, deleteAthlete} from '../../../../../features/athletes/athletesSlice'
import { getAll } from './../../../../services/atheletesService';
import { AthleteForm } from '../AthleteForm/AthleteForm'


export const ManageUsers = () => {
  const athletesState = useSelector(state => state.athletes)
  const dispatch = useDispatch()
  const [viewForm, setViewForm] = useState(false)



  useEffect(() => {
    getAll()
    .then(res => res.json())
    .then(
      (result) => {
        dispatch(initState(result.data))
      },
      (error) => {
        // acciones a realizar al recibir un KO
      }
    )
  }, [])

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
