import {IRegisterActions, registerError, registerSuccess} from "./registerReducer";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType, GetStateType} from "../../../../MainBll/store";
import {RegisterAPI} from "../RegisterDal/RegisterAPI";
import {emailValidator, passwordvalidator} from "../../../../helpers/validators";

export const registerValidatorCallBack=(email:string,password:string, password2:string)=>
    (dispatch:ThunkDispatch<AppStateType,{},IRegisterActions>, getState:GetStateType)=>{
    if (!emailValidator(email)){
dispatch(registerError('Email not valid!'))
    } else if (!passwordvalidator(password)){
        dispatch(registerError('Password not valid! must be more than 3 characters...'))
    }else if (password !== password2) {
       dispatch(registerError('Passwords do not match!'));
} else {
        dispatch(register(email,password))
    }
}

export const register=(email:string,password:string)=>async (disputch:ThunkDispatch<AppStateType,{},IRegisterActions>, getState:GetStateType)=>{

try {

    const data = await RegisterAPI.register(email, password)
    if (data.error) {
        disputch(registerError(data.error))
    } else{
disputch(registerSuccess(true))
        console.log('Register Success!', data)
    }
}
catch (e){
    disputch(registerError(e.message))
    console.log('Register Error!', e)

}
}

