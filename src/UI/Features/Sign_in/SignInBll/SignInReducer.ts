export const SET_EMAIL='SIGN_IN/SET_EMAIL'
export const SET_PASSWORD='SIGN_IN/SET_PASSWORD'
export const SET_REMEMBER_ME='SIGN_IN/SET_REMEMBER_ME'
export const SIGN_IN_SUCCUSS='SIGN_IN/SIGN_IN_SUCCUSS'
export const SIGN_IN_ERROR='SIGN_IN/SIGN_IN_ERROR'
export const SIGN_IN_AUTH_ME='SIGN_IN/SIGN_IN_AUTH_ME'

interface IInitialState {
    email:string,
    password:string,
    rememberMe:boolean,
    error:string,
    isAuth:boolean,
    success:boolean
}
interface ISetEmail {
    type: typeof SET_EMAIL,
    email:string
}
interface ISetPassword {
    type: typeof SET_PASSWORD,
    password:string
}
interface ISetRememberMe {
    type: typeof SET_REMEMBER_ME,
    value:boolean
}
 interface ISetError {
     type: typeof SIGN_IN_ERROR,
     error:string
 }
 interface ISignInSuccess {
     type:typeof SIGN_IN_SUCCUSS,
     success:boolean
 }
 interface ISignInAuthMe {
     type:typeof SIGN_IN_AUTH_ME,
     isAuth:boolean
 }

export const initialState={
    email:'tania@',
    password:'1234',
    rememberMe:false,
    error:'',
    success:false,
    isAuth:false
}
export type ISingInActions=ISetEmail|ISetPassword|ISetRememberMe|ISetError|ISignInSuccess|ISignInAuthMe

export const signInReducer=(state=initialState, action:ISingInActions)=>{
    switch (action.type) {
        case SET_EMAIL:
            return {...state, email: action.email}
        case SET_PASSWORD:
            return {...state, password: action.password}
        case SET_REMEMBER_ME:
            return {...state, rememberMe: action.value}
        case SIGN_IN_ERROR:
            return {...state, error: action.error}
        case SIGN_IN_SUCCUSS:
            return {...state, success: action.success}
        case SIGN_IN_AUTH_ME:
            return {...state, isAuth: action.isAuth}
        default:{
            return state
        }
    }
}

export const SignInSetEmailSuccess=(email:string):ISetEmail=>({type:SET_EMAIL,email})
export const SignInSetPasswordSuccess=(password:string):ISetPassword=>({type:SET_PASSWORD,password})
export const SignInSetRememberMeSuccess=(value:boolean):ISetRememberMe=>({type:SET_REMEMBER_ME,value})
export const SignInError=(error:string):ISetError=>({type:SIGN_IN_ERROR,error})
export const SignInSuccess=(success:boolean):ISignInSuccess=>({type:SIGN_IN_SUCCUSS,success})
export const SignInAuthMe=(isAuth:boolean):ISignInAuthMe=>({type:SIGN_IN_AUTH_ME,isAuth})

// export const setIsAuth=(error:string):ISetError=>({type:SIGN_IN_ERROR,error})