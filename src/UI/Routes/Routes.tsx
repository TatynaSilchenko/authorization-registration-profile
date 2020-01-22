import React from "react"
import {Route} from "react-router-dom";
import Profile from "../Features/Profile/Profile";
import RegisterContainer from "../Features/Register/RegisterUI/RegisterContainer";
import SignInContainer from "../Features/Sign_in/SignInUI/SignInContainer";
import ForgotContainer from "../Features/Fogot/ForgotUI/ForgotContainer";

export const SIGN_IN_PATH="/sign_in"
export const REGISTER_PATH="/register"
export const FOGOT="/fogot"
export const PROFILE_PATH="/profile"

const Routes:React.FC=()=>{
    return <div>

<Route path={SIGN_IN_PATH} render={()=><SignInContainer/>}/>
<Route path={REGISTER_PATH} render={()=><RegisterContainer/>}/>
<Route path={FOGOT} render={()=><ForgotContainer/>}/>
<Route path={PROFILE_PATH} render={()=><Profile/>}/>

    </div>
}
export default Routes