import { useState  } from "react"
import { useDispatch, useSelector } from 'react-redux';

import {addAthlete, totalAthletes} from '../../../features/athletes/athletesSlice'


export const AthleteFormXX = () => {

    const [athlete, setAthlete] = useState({
            id: '',
            employee_name: '',
            employee_salary: '',
            employee_age: '',
            profile_image: ''
    })

    const dispatch = useDispatch()

    const handleChange = (e) => {
        setAthlete({
            ...athlete,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(addAthlete({...athlete, id: athletesState.length + 1}))
    }

    const athletesState = useSelector(state => state.athletes)
    console.log(['at: ',totalAthletes])

  return (
    <div className='AthleteForm'>
        <h1>AthleteForm</h1>
        <form>
            Nombre: <input type='text' name='employee_name' onChange={(e) => handleChange(e)}/>
            Salary: <input type='text' name='employee_salary' onChange={(e) => handleChange(e)}/>
            Age: <input type='text' name='employee_age' onChange={(e) => handleChange(e)}/>
            <button onClick={(e) => handleClick(e)}>Save</button>
        </form>
        <div>Total: {athletesState.length}</div>

    </div>
  )
}
