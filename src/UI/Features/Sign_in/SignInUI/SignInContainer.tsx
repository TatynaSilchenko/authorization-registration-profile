import React, {useState} from 'react';
import SignIn from "./SignIn";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../MainBll/store";
import {SignInSetEmailSuccess, SignInSetPasswordSuccess, SignInSetRememberMeSuccess} from "../SignInBll/SignInReducer";
import {signIn} from "../SignInBll/SignInThunk";
import {Redirect} from "react-router";
import {PROFILE_PATH} from "../../../Routes/Routes";

const SignInContainer=()=>{
    let dispatch=useDispatch()
    let error=useSelector((store:AppStateType)=>store.signIn.error);
    let success=useSelector((store:AppStateType)=>store.signIn.success);
    let isAuth=useSelector((store:AppStateType)=>store.signIn.isAuth);
    let [email,setEmail]=useState('')
    let [password, setPassword]=useState('')
    let [rememberME, setRememberMe]=useState(false)
    let loginSetEmail=(email:string)=>{
        setEmail(email)
    }
    let loginSetPassword=(password:string)=>{
        setPassword(password)
    }
    let loginRememberMe=()=>{
        setRememberMe(!rememberME)
    }
    let SignInCallBack=()=>{
dispatch(SignInSetEmailSuccess(email))
dispatch(SignInSetPasswordSuccess(password))
dispatch(SignInSetRememberMeSuccess(rememberME))
        dispatch(signIn(email,password,rememberME))
    }
if (isAuth) return <Redirect to={PROFILE_PATH}/>

    return <SignIn email={email}
                   loginSetEmail={loginSetEmail}
                   password={password}
                   loginSetPassword={loginSetPassword}
                   SignInCallBack={SignInCallBack}
                   rememberME={rememberME}
                   loginRememberMe={loginRememberMe}
                   error={error}
                   success={success}/>
}
export default SignInContainer