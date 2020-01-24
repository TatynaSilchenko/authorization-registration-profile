import Register from "./Register";
import React, {useEffect, useState} from "react";
import {registerValidatorCallBack} from "../RegisterBll/registerThunk";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../MainBll/store";
import {Redirect} from "react-router";
import {SIGN_IN_PATH} from "../../../../Routes/Routes";


const RegisterContainer: React.FC = () => {
    // const email = useSelector((store: AppStateType) => store.register.email);

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    let successRegister=useSelector((store:AppStateType)=>store.register.success)
    let errorRegister=useSelector((store:AppStateType)=>store.register.error)


   /* useEffect(()=>{
        dispatch(registerValidatorCallBack(storeEmail,storePassword,storePassword2))

    })*/

    const registerCallBack=()=>{
        dispatch(registerValidatorCallBack(email,password,password2))
        setEmail('')
        setPassword('')
        setPassword2('')
    }

    // const registerStatecons = useSelector((store: AppStateType) => store.register);
    // useEffect(()=>{registerValidatorCallBack(email,password,password2)})

    const registerSetEmail = (email: string) => {
        setEmail(email)
    }
    const registerSetPassword = (password: string) => {
        setPassword(password)

    }
    const registerSetPassword2 = (password: string) => {
        setPassword2(password)
    }

    if (successRegister) return <Redirect to={SIGN_IN_PATH} />
    return (
        <Register email={email} password={password}
                  password2={password2}
                  registerSetEmail={registerSetEmail}
                  registerSetPassword={registerSetPassword}
                  registerSetPassword2={registerSetPassword2}
                  registerCallBack={registerCallBack}
                  successRegister={successRegister}
                  errorRegister={errorRegister}
        />
    )
}

export default RegisterContainer