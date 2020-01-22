export const SET_EMAIL='NEKO/FORGOT'
export const SET_SUCCESS='NEKO/SUCCESS'
export const SET_ERROR='NEKO/ERROR'

// interface ISomeAction {
//     type: string;
// }

interface ISentEmail {
    type:typeof SET_EMAIL,
    email:string
}
interface ISentSuccess {
    type:typeof SET_SUCCESS,
    success:boolean
}
interface ISentError {
    type:typeof SET_ERROR,
    error:string
}

// export type IForgotActions = ISomeAction|ISentEmail;
export type IForgotActions = ISentEmail|ISentSuccess|ISentError;
export const setFogot=(email:string):ISentEmail=>({type:SET_EMAIL, email})
export const setSuccess=(success:boolean):ISentSuccess=>({type:SET_SUCCESS, success})
export const setErrorForgot=(error:string):ISentError=>({type:SET_ERROR, error})
