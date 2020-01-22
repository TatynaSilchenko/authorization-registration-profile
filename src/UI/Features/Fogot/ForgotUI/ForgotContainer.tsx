import React, {useEffect, useState} from 'react';
import Forgot from './Forgot';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../MainBll/store";
import {forgot} from "../FogotBll/forgotThunks";

const ForgotContainer: React.FC = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const error = useSelector((store: AppStateType) => store.forgot.error)

    const setFogotCallBack = (email: string) => {
        setEmail(email)
    }

// useEffect(()=>{forgot(email)})
    const setForgot = () => {
        // dispatch(setFogot(email))
        dispatch(forgot(email))
    }
    return (
        <div>
        <Forgot email = {email}
    setFogotCallBack = {setFogotCallBack}
    setForgot = {setForgot}
    error = {error}
    />
        </div>
)
    ;
};

export default ForgotContainer;
