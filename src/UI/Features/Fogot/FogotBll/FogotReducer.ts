import {forgotInitialState, IForgotState} from './forgotInitialState'
import {IForgotActions, SET_EMAIL, SET_ERROR, SET_SUCCESS} from "./forgotActions";


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
