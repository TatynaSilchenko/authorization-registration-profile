import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IForgotActions, setErrorForgot, setSuccess} from "./forgotActions";
import {AppStateType} from "../../../../MainBll/store";
import {ForgotAPI} from "../FogotDAL/ForgotAPI";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => AppStateType;

export const forgot = (email:string): ThunkAction<Return, AppStateType, ExtraArgument, IForgotActions> =>
    async (dispatch: ThunkDispatch<AppStateType, ExtraArgument, IForgotActions>, getStore: IGetStore) => {
try{
    const data=await ForgotAPI.fogot(email)
    if (data.error){
        dispatch(setErrorForgot(data.error))
    } else {
        console.log('success fogot')
        dispatch(setSuccess(true))
    }
}
catch(e){
    dispatch(setErrorForgot(e.error))
}
    };
