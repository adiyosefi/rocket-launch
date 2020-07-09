import React from 'react';
import Main from "./components/Main/Main";
import { BrowserRouter } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    );
};

export default App;