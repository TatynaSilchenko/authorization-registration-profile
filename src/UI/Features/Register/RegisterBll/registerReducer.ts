export const SET_EMAIL = 'REGISTER/SET_EMAIL'
export const SET_PASSWORD = 'REGISTER/SET_PASSWORD'
export const REGISTER_LOADING = 'REGISTER/LOADING';
export const REGISTER_ERROR = 'REGISTER/ERROR';
export const REGISTER_SUCCESS = 'REGISTER/SUCCESS';
//tania@gmail.com
//12345

export const initialState = {
    success: false,
    error: ''
}

interface IInitialState {
    success: boolean,
    error: string
}


interface IRegisterError {
    type: typeof REGISTER_ERROR,
    error: string
}

interface IRegisterSuccess {
    type: typeof REGISTER_SUCCESS,
    success: boolean
}

export type IRegisterActions = IRegisterError | IRegisterSuccess

export const registerReducer = (state = initialState, action: IRegisterActions) => {
    switch (action.type) {

        case REGISTER_SUCCESS:
            return {...state, success: action.success}
        case REGISTER_ERROR:
            return {...state, error: action.error}
        default: {
            return state
        }
    }
}

export const registerError = (error: string): IRegisterError => ({
    type: REGISTER_ERROR, error
});
export const registerSuccess = (success: boolean): IRegisterSuccess => ({
    type: REGISTER_SUCCESS, success
})