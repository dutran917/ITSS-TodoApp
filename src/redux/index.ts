import { combineReducers } from "redux";
import { authReducer } from "./authSlice";
import { taskReducer } from "./taskSlice";
import { userReducer } from "./userSlice";
const rootReducer = combineReducers({
    task: taskReducer,
    user: userReducer,
    auth: authReducer,
});
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;
