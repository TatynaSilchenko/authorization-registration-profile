import {instance} from "../../../../helpers/instance";


export interface IRegister {
    success:boolean,
    error:string
}

export const RegisterAPI={

    async register(email:string,password:string){
        const response=await instance.post<IRegister>('auth/register',{email,password})
        return response.data
    }

}