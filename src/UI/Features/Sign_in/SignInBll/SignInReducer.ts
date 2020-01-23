export const SIGN_IN_SUCCUSS='SIGN_IN/SIGN_IN_SUCCUSS'
export const SIGN_IN_ERROR='SIGN_IN/SIGN_IN_ERROR'
export const SIGN_IN_AUTH_ME='SIGN_IN/SIGN_IN_AUTH_ME'

interface IInitialState {
    error:string,
    isAuth:boolean,
    success:boolean
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
    error:'',
    success:false,
    isAuth:false
}
export type ISingInActions=ISetError|ISignInSuccess|ISignInAuthMe

export const signInReducer=(state=initialState, action:ISingInActions)=>{
    switch (action.type) {
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
export const SignInError=(error:string):ISetError=>({type:SIGN_IN_ERROR,error})
export const SignInSuccess=(success:boolean):ISignInSuccess=>({type:SIGN_IN_SUCCUSS,success})
export const SignInAuthMe=(isAuth:boolean):ISignInAuthMe=>({type:SIGN_IN_AUTH_ME,isAuth})

// export const setIsAuth=(error:string):ISetError=>({type:SIGN_IN_ERROR,error})