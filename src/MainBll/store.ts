import {applyMiddleware, combineReducers, createStore} from "redux";
import {registerReducer} from "../UI/Features/Register/RegisterBll/registerReducer";
import {signInReducer} from "../UI/Features/Sign_in/SignInBll/SignInReducer";
import {forgotReducer} from "../UI/Features/Fogot/FogotBll/FogotReducer";
import  thunk from "redux-thunk"


const reducers=combineReducers({
    signIn:signInReducer,
    register:registerReducer,
    forgot: forgotReducer

})
export const store=createStore(reducers,applyMiddleware(thunk))
export type AppStateType=ReturnType<typeof reducers>
export type GetStateType=()=> AppStateType


