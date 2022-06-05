import { createSlice } from "@reduxjs/toolkit";
type userState = {
    user: null | any
}
const initialState:userState = {
    user: {}
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setNewUser (state, action:any) {
            state.user = action.payload
        }
    }
})

export const {setNewUser} = userSlice.actions
export const userReducer = userSlice.reducer