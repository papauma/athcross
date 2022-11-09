import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit'
const ATHCROSS_TOKEN_USER = 'athcross_token_user'

const URL_USERS = 'http://localhost:3000/users'

const initialState = {
    user: {
      id: '',
      user: '',
      pass: '',
      name: '',
      avatar: ''
    },
    token: null,
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: ''
}


export const userActiveSlice = createSlice({
    name: 'userActive',
    initialState,
    reducers: {
        initUsers: (state, action) => {

        },
        login: (state, action) => {
            if (action.payload.user === 'salva' && action.payload.pass === 'pepe12') {
                state.user = action.payload
            }

        },
        logout: (state, action) => {
          state.user = initialState.user
        }
    }
  });

export const { initUsers, login, logout } = userActiveSlice.actions;

export default userActiveSlice.reducer