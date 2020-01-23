
import {instance} from "../../../../helpers/instance";

interface IFogot {
    success:boolean,
    error:string
}

export const ForgotAPI = {
    async fogot(email:string){
        const response=await instance.post<IFogot>('auth/me',{email})
        return response.data
    }

};
