import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { initState } from './athletesSlice'
import { getAllAthletes } from '../../app/services/atheletesService'

const useAtheletes = () => {
    const dispatch = useDispatch()
    const athletesState = useSelector(state => state.athletes)
    useEffect(() => {
        getAllAthletes()
        .then(res => res.json())
        .then(
          (result) => {
            dispatch(initState(result))
          },
          (error) => {
            // acciones a realizar al recibir un KO
          }
        )
    }, [])

    return {athletesState}
  }

  export default useAtheletes;