import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import Main from "./UI/Main";
import {store} from "./MainBll/store";
import {Provider} from "react-redux";


const App: React.FC = () => {
    return (
        <div className="App">
            <Provider store={store}>
            <HashRouter>
                    <Main/>
            </HashRouter>
            </Provider>
        </div>
    );
};

export default App;