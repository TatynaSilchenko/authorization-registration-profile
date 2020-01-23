import React from 'react';
interface IDataProps {
    email:string,
    password:string,
    rememberME:boolean,
    error:string,
    success:boolean
}
interface ICallBacks{
    loginSetEmail:(email:string)=>void,
    loginSetPassword:(password:string)=>void,
    SignInCallBack:()=>void,
    loginRememberMe:()=>void
}
type IProps=IDataProps&ICallBacks

const SignIn:React.FC<IProps>=({email,loginSetEmail,
                                   password,loginSetPassword,
                                   SignInCallBack,rememberME,
                                   loginRememberMe,error,
                                   success})=>{

    return  <div style={{  height: '50vh',
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        justifyContent: 'center'}}>
       <div> Sign In </div>
        {(error)&&<div style={{color:'red'}}>{error}</div>}
        {(success)&&<div style={{color:'green'}}> 'You are in your account'</div>}
        <div><input type='text' placeholder='enter your e-mail' value={email} onChange={e=>loginSetEmail(e.currentTarget.value)}/></div>
        <div><input type='password' placeholder='enter your password' value={password} onChange={e=>loginSetPassword(e.currentTarget.value)}/></div>
        <input type="checkbox" checked={rememberME}onChange={e=>loginRememberMe()} /> Remember Me
        <div><button onClick={e=>SignInCallBack()}> Sign In</button></div>

    </div>
}
export default SignIn