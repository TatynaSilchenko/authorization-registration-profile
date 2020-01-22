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
