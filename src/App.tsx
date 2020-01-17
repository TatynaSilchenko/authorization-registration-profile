import React from 'react';
import './App.css';

import Main from "./Main/Main";
import {HashRouter} from "react-router-dom";


const App: React.FC = () => {
    return (
        <div className="App">
            <HashRouter>
                <Main/>
            </HashRouter>
        </div>
    );
}

export default App;
