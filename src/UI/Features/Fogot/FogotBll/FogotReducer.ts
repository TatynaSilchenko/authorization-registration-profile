export const SET_SUCCESS='NEKO/SUCCESS'
export const SET_ERROR='NEKO/ERROR'

export interface IForgotState {
    isloading:boolean
    success: boolean,
    error: string
}

export const forgotInitialState: IForgotState = {
    success: false,
    error: '',
    isloading:false

};

interface ISentSuccess {
    type:typeof SET_SUCCESS,
    success:boolean
}
interface ISentError {
    type:typeof SET_ERROR,
    error:string
}
export type IForgotActions = ISentSuccess|ISentError;

export const forgotReducer = (state = forgotInitialState, action: IForgotActions):IForgotState => {
    switch (action.type) {
        case SET_SUCCESS:
            return {...state, success:action.success}
        case SET_ERROR:
            return {...state, error:action.error}

        default: {
            return state;
        }
    }
};

export const setSuccess=(success:boolean):ISentSuccess=>({type:SET_SUCCESS, success})
export const setErrorForgot=(error:string):ISentError=>({type:SET_ERROR, error})
