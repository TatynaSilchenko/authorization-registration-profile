import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "../../../../MainBll/store";
import {ISingInActions, SignInAuthMe, SignInError, SignInSuccess} from "./SignInReducer";
import {SignInAPI} from "../SignInDal/SignInAPI";

export const signIn=(email:string, password:string, rememberMe:boolean)=>
    async (disputch: ThunkDispatch<AppStateType, {}, ISingInActions>) => {
        try {
            debugger
            console.log('Success LogIn')
            const data = await SignInAPI.signIn(email, password, rememberMe)
            if (data.error) {
                disputch(SignInError(data.error))
            } else {
                disputch(SignInSuccess(true))
                disputch(SignInAuthMe(true))
                console.log(data.token)
            }
        }
        catch (e){
            disputch(SignInError(e.message))
            console.log('SignIn Error!', e)

        }
    }
