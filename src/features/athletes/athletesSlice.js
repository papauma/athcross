import { createSlice } from '@reduxjs/toolkit'
/*
const initialState = [
    {
        id:1,
        employee_name: 'Tiger Nixon',
        employee_salary: 320800,
        employee_age: 61,
        profile_image: ''
    },
    {
        id:2,
        employee_name: 'Garrett Winters',
        employee_salary: 170750,
        employee_age: 63,
        profile_image: ''
    }
]*/

export const athletesSlice = createSlice({
    name: 'athletes',
    initialState: [],
    reducers: {
        initState: (state, action) => {
            return[...action.payload]
        },
        addAthlete: (state, action) => {
            console.log(state, action)
            state.push(action.payload)
        },
        deleteAthlete: (state, action) => {
            const nume = state.map(e => e.id).indexOf(action.payload);

            if (nume !== -1) {
                state.splice(nume, 1)
            }
        },
        totalAthletes: (state, action) => {
            console.log(state.length)
        }
    }
})

export const {addAthlete, totalAthletes, initState, deleteAthlete} = athletesSlice.actions
export default athletesSlice.reducer