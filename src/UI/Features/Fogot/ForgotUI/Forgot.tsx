import React from 'react';

interface ForgotProps {
    email:string,
    setFogotCallBack:(email:string)=>void,
    setForgot:()=>void,
    error:string
}

const Forgot: React.FC<ForgotProps> = ({email,setFogotCallBack,setForgot,error}) => {

    return (
        <div style={{  height: '80vh',
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
