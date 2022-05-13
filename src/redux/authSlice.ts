import { createSlice } from "@reduxjs/toolkit";
type authState = {
    auth: boolean
} 
const initialState: authState = {
    auth: localStorage.getItem('token') ? true : false
}
const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        login(state ,action: any) {
            state.auth = action.payload
        },
        logout(state,action:any) {
            state.auth = action.payload
        }
    }
})
export const {login,logout} = authSlice.actions
export const authReducer = authSlice.reducer
