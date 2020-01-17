import {combineReducers,applyMiddleware, createStore} from "redux";
import FogotReducer from "./Features/Fogot/FogotBLL/FogotReducer";
import RegisterReducer from "./Features/Register/RegisterBLL/RegisterReducer";
import SignInReducer from "./Features/SignIn/SignInBLL/SignInReducer";
import  thunk from "redux-thunk"

const reducers=combineReducers({
    fogot:FogotReducer,
    register:RegisterReducer,
    signIn: SignInReducer
})
export const store=createStore(reducers, applyMiddleware(thunk))
export type AppStateType=ReturnType<typeof reducers>
