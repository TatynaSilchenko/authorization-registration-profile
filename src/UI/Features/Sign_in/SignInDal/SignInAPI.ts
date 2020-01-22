import {instance} from "../../../../helpers/instance";

interface ISingIn {
    token:string,
    error:string
}

export const SignInAPI={

    async signIn(email:string, password:string, rememberMe: boolean){
        debugger
        const response=await instance.post<ISingIn>('auth/login',{email,password,rememberMe})
        return response.data
    }
}