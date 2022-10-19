import { configureStore } from '@reduxjs/toolkit'
import  athletesReducer, { addAthlete }  from '../features/athletes/athletesSlice'
import userActiveReducer  from '../features/users/userActive'
import { getAll } from './services/atheletesService'


export const store = configureStore({
    reducer: {
        athletes: athletesReducer,
        userActive: userActiveReducer
    }
})


/*
getAll()
.then(
    (result) => {
        debugger
        result.data.forEach(element => {
            store.dispatch(addAthlete(element))
        })
   }, (error) => {
        debugger
    }
)
*/