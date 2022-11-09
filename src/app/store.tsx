import { configureStore } from '@reduxjs/toolkit'
import  athletesReducer, { addAthlete }  from '../features/athletes/athletesSlice'
import userActiveReducer  from '../features/users/userActive'


const store = configureStore({
    reducer: {
        athletes: athletesReducer,
        userActive: userActiveReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store