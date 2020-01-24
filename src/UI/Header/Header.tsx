import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {
    FOGOT,
    PROFILE_PATH,
    REGISTER_PATH,
    SIGN_IN_PATH,
    TEST_COLOR,
    TEST_MODALS,
    TEST_TIME
} from "../../Routes/Routes";

const Header: React.FC = () => {
    const [show, setShow] = useState(false);

    return (<div>
            <button onClick={()=>setShow(!show)}>{show?'hide header':'show header'}</button>
            {(show) && <div style={{  height: '10vh',
                display: 'flex',
                justifyContent: 'space-evenly'}}>
                <NavLink to={REGISTER_PATH}> Register</NavLink>
                <span><NavLink to={SIGN_IN_PATH}> Sign in</NavLink></span>
            <span><NavLink to={FOGOT}> Fogot</NavLink></span>
            <span><NavLink to={PROFILE_PATH}> Profile</NavLink></span>
            <span><NavLink to={TEST_TIME}> Test time</NavLink></span>
            <span><NavLink to={TEST_MODALS}> Test modals</NavLink></span>
            <span><NavLink to={TEST_COLOR}> Test color</NavLink></span>
            </div>}
        </div>
    )}

export default Header