import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { addAthleteService, delAthleteService } from '../../app/services/atheletesService'

export const addAthlete = createAsyncThunk(
    "athletesSlice/addAthlete",
    async (athlete) => {
        const res = await addAthleteService(athlete);
        if (res.status === 201 && res.ok) {
            return athlete
        }
    }
);

export const deleteAthlete = createAsyncThunk(
    "athletesSlice/deleteAthlete",
    async (id) => {
        const res = await delAthleteService(id);
        if (res.status === 200 && res.ok) {
            return id
        }
    }
);

export const athletesSlice = createSlice({
    name: 'athletes',
    initialState: [],
    reducers: {
        initState: (state, action) => {
            return[...action.payload]
        },
        /*addAthlete: (state, action) => {
            console.log(state, action)
            state.push(action.payload)
        },
        deleteAthlete: (state, action) => {
            const nume = state.map(e => e.id).indexOf(action.payload);

            if (nume !== -1) {
                state.splice(nume, 1)
            }
        },*/
        maxAthletes: (state, action) => {
            return state.reduce(function(a, b) {
                let v1 = a.id ? a.id : 0
                let v2 = b.id ? b.id : 0
                return Math.max(v1, v2);
            }, -Infinity)
        }
    },
    extraReducers: {
        [addAthlete.fulfilled]: (state, action) => {
            state.push(action.payload);
        },
        [deleteAthlete.fulfilled]: (state, action) => {
            const nume = state.map(e => e.id).indexOf(action.payload);
            if (nume !== -1) {
                state.splice(nume, 1)
            }
        }
    }
})

export const {maxAthletes, initState} = athletesSlice.actions
export default athletesSlice.reducer