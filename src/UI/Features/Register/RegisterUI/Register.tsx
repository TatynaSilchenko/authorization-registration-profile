import React from 'react';

export interface IDataProps {
    email:string,
    password:string,
    password2:string,
    successRegister:boolean
    errorRegister:string
}
export interface ICallBacks{
    registerSetEmail:(email:string)=>void,
    registerSetPassword:(password:string)=>void,
    registerSetPassword2:(password:string)=>void,
    registerCallBack:()=>void

}
export type IProps=IDataProps&ICallBacks

const Register:React.FC<IProps>=(
    {registerSetEmail,email,
        registerSetPassword,password,
        password2,registerSetPassword2,
        registerCallBack,successRegister,
        errorRegister})=>{

    return <div>
        Register
               <div><input type='email' placeholder='Enter your email' value={email} onChange={e=>registerSetEmail(e.currentTarget.value)}/></div>
        <div><input type='password' placeholder='Enter your password' value ={password}onChange={e=>registerSetPassword(e.currentTarget.value)}/></div>
            <div><input type='password' placeholder='Enter your password' value ={password2}onChange={e=>registerSetPassword2(e.currentTarget.value)}/></div>
        <button onClick={registerCallBack} >Register</button>
    </div>
}
export default Register