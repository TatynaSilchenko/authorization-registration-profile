import React from 'react';

interface IDataProps{
    email:string,
    error:string
}
interface ICallBacks{
    setFogotCallBack:(email:string)=>void,
    setForgot:()=>void
}

type IForgotProps=IDataProps&ICallBacks

const Forgot: React.FC<IForgotProps> = ({email,setFogotCallBack,setForgot,error}) => {

    return (
        <div style={{  height: '50vh',
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'center',
            justifyContent: 'center'}}>
            {(error)&&<div style={{color:'red'}}>Error {error}</div>}
            <div><input placeholder={'Enter your e-mail'} value={email}
                        onChange={(e)=>setFogotCallBack(e.currentTarget.value)}/></div>
            <div> <button onClick={()=>setForgot()}>Send e-mail</button></div>
        </div>
    );
};

export default Forgot;
