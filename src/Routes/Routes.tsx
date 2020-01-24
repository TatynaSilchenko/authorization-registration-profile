import React from "react"
import {Route} from "react-router-dom";
import SignInContainer from "../UI/Features/Sign_in/SignInUI/SignInContainer";
import RegisterContainer from "../UI/Features/Register/RegisterUI/RegisterContainer";
import ForgotContainer from "../UI/Features/Fogot/ForgotUI/ForgotContainer";
import Profile from "../UI/Features/Profile/Profile";
import TestModals from "../part_2/TestModals/TestModals";
import TestTime from "../part_2/TestTime/TestTime";
import TestColor from "../part_2/TestColor/TestColor";


export const SIGN_IN_PATH="/sign_in"
export const REGISTER_PATH="/register"
export const FOGOT="/fogot"
export const PROFILE_PATH="/profile"
export const TEST_MODALS="/modals"
export const TEST_TIME="/test_time"
export const TEST_COLOR="/test_color"

const Routes:React.FC=()=>{
    return <div>

<Route path={SIGN_IN_PATH} render={()=><SignInContainer/>}/>
<Route path={REGISTER_PATH} render={()=><RegisterContainer/>}/>
<Route path={FOGOT} render={()=><ForgotContainer/>}/>
<Route path={PROFILE_PATH} render={()=><Profile/>}/>
<Route path={TEST_MODALS} render={()=><TestModals/>}/>
<Route path={TEST_TIME} render={()=><TestTime/>}/>
<Route path={TEST_COLOR} render={()=><TestColor/>}/>

    </div>
}
export default Routes