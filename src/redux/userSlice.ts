import { createSlice } from "@reduxjs/toolkit";
type userState = {
    name: string,
    id: string
}
const initialState:userState = {
    name: '',
    id: ''
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser (state, action:any) {
            state = action.payload
        }
    }
})

export const {setUser} = userSlice.actions
export const userReducer = userSlice.reducer