export const SET_EMAIL = 'REGISTER/SET_EMAIL'
export const SET_PASSWORD = 'REGISTER/SET_PASSWORD'
export const REGISTER_LOADING = 'REGISTER/LOADING';
export const REGISTER_ERROR = 'REGISTER/ERROR';
export const REGISTER_SUCCESS = 'REGISTER/SUCCESS';
//tania@gmail.com
//12345

export const initialState = {
    email: '',//tania@
    password: '',//1234
    password2:'',
    success: false,
    error: ''
}

interface IInitialState {
    email: string,
    password: string,
    password2:string,
    success: boolean,
    error: string
}

interface ISetEmailAction {
    type: typeof SET_EMAIL,
    email: string
}

interface ISetPasswordAction {
    type: typeof SET_PASSWORD,
    password: string,
    password2:string
}

interface IRegisterError {
    type: typeof REGISTER_ERROR,
    error: string
}

interface IRegisterSuccess {
    type: typeof REGISTER_SUCCESS,
    success: boolean
}

export type IRegisterActions = ISetEmailAction | ISetPasswordAction | IRegisterError | IRegisterSuccess

export const registerReducer = (state = initialState, action: IRegisterActions) => {
    switch (action.type) {
        case SET_EMAIL:
            return {...state, email: action.email}
        case SET_PASSWORD:
            return {...state, password: action.password,password2:action.password2}
        case REGISTER_SUCCESS:
            return {...state, success: action.success}
        case REGISTER_ERROR:
            return {...state, error: action.error}
        default: {
            return state
        }
    }
}

export const registerSetEmailSuccess = (email: string): ISetEmailAction => ({
    type: SET_EMAIL, email
})
export const registerSetPasswordSuccess = (password: string,password2:string): ISetPasswordAction => ({
    type: SET_PASSWORD, password,password2
})

export const registerError = (error: string): IRegisterError => ({
    type: REGISTER_ERROR, error
});
export const registerSuccess = (success: boolean): IRegisterSuccess => ({
    type: REGISTER_SUCCESS, success
})