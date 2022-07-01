import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    file: {
        token: '',
        coke: '',
        name: '',
        username: ''
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userDelete(state) {
            state.file = {}
        },
        userIncrement(state, action) {
            state.file = action.payload
        }
    },
})

export const { userDelete,userIncrement } = userSlice.actions

export default userSlice.reducer
