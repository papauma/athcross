import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const userActiveSlice = createSlice({
    name: 'userActive',
    initialState,
    reducers: {
        login: (state, action) => {
           return action.payload
        }
    }
})

export const {login} = userActiveSlice.actions
export default userActiveSlice.reducer