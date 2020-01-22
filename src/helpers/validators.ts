const reg = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,7}$/i;

export const emailValidator = (email: string): boolean => reg.test(email); // true - valid
export const passwordvalidator=(password:string):boolean=>password.length>3