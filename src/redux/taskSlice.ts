import { createSlice } from "@reduxjs/toolkit";

type taskState = {
    task: any | null,
    type: string
}

const initialState: taskState = {
    task: null,
    type: ''
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addNewTask (state,action:any) {
            state.task = action.payload
            state.type = 'add'
        },
        deleteTask (state,action:any) {
            state.task = action.payload
            state.type = 'delete'
        },
        updateTask (state,action:any) {
            state.task = action.payload
            state.type = 'update'
        }
    }
})

export const {addNewTask, deleteTask, updateTask} = taskSlice.actions
export const taskReducer = taskSlice.reducer