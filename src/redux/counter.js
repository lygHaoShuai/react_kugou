import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list: []
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        counterDelete(state) {
            state.list = []
        },
        counterIncrement(state, action) {
            if(!state.list.length) {
                state.list.splice(0,0,action.payload)
            } else {
                state.list.map((item,index) => {
                    if(JSON.stringify(item)===JSON.stringify(action.payload)) {
                        state.list.splice(index,1)
                    }
                })
                state.list.splice(0,0,action.payload)
            }

        },
    },
})

export const { counterDelete,counterIncrement } = counterSlice.actions

export default counterSlice.reducer
