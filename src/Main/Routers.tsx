import React from "react";
import Fogot from "./Features/Fogot/FogotUI/Fogot";
import {Route} from "react-router-dom";
import Register from "./Features/Register/RegisterUI/Register";
import SignIn from "./Features/SignIn/SighInUI/SignIn";

const FOGOT_PATH='/fogot'
const REGISTER_PATH='/register'
const SIGN_IN='/sign_in'


const Routers:React.FC=()=>{
    return <div>
        <Route path={FOGOT_PATH} render={()=><Fogot/>}/>
        <Route path={REGISTER_PATH} render={()=><Register/>}/>
        <Route path={SIGN_IN} render={()=><SignIn/>}/>
    </div>
}
export default Routers