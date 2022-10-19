import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAthlete } from '../../../../../features/athletes/athletesSlice';

export const AthleteForm = (prop) => {
  const athletesState = useSelector(state => state.athletes)
  const dispatch = useDispatch()

  const [user, setUser] = useState({})

  const handleChange = (e) => {
    setUser({
        ...user,
        [e.target.name]: e.target.value
    })
}

const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addAthlete({
        ...user, id: athletesState.length + 1
    }))
    setUser({})
}
  console.log(['user: ', user])
  return (
    <div >
      <div>user: {user.employee_name}</div>
      <form onSubmit={ (e)=>handleSubmit(e)}>
        <input type="text" name="employee_name" id="" placeholder='name...' onChange={(e)=>handleChange(e)} value={user.employee_name}/>
        <input type="number" name="employee_salary" id="" placeholder='salary...' onChange={(e)=>handleChange(e)} value={user.employee_salary}/>
        <input type="number" name="employee_age" id="employee_age" placeholder='age...' onChange={(e)=>handleChange(e)} value={user.employee_age}/>
        <button type='submit'>Save</button>
      </form>
    </div>
  )
}
