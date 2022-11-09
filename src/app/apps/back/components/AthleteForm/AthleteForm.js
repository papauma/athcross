import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAthlete } from '../../../../../features/athletes/athletesSlice';
import { useForm } from "react-hook-form";


export const AthleteForm = (props) => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = data => {
    data = {...data, id: athletesState.length + 1}
    dispatch(addAthlete(data))
  }

  const athletesState = useSelector(state => state.athletes)
  const dispatch = useDispatch()

  const [athlete, setAthlete] = useState(props.athlete ? props.athlete : null)

  return (
    <div >
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="name" id="name" placeholder='name...' {...register('name', {required: true})} />
        <input type="text" name="surname" id="surname" placeholder='surname...' {...register('surname', {required: true})} />
        <input type="number" name="year" id="age" placeholder='year...' {...register('year', {required: true})} />
        <select name="gender" id="gender" {...register("gender")}>
          <option value='-1' selected >Select</option>
          <option value='male'  >Male</option>
          <option value='female'>Female</option>
        </select>
        <input type="number" name="points" id="points" placeholder='points...'{...register('points', {required: true})} />

        <button type='submit'>Save</button>

      </form>
    </div>
  )
}
