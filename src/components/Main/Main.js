import React from 'react';
import {Switch, Route, Redirect, BrowserRouter} from "react-router-dom";
import AppContainer from "../AppContainer/AppContainer";
import LaunchDetails from "../LaunchDetails/LaunchDetails";
import {LaunchesProvider} from "../../context/launches";

const Main = () => {
    return (
        <LaunchesProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={AppContainer} />
                    <Route path="/:launchId" component={LaunchDetails} />
                    <Redirect from="/" to="/"/>
                </Switch>
            </BrowserRouter>
        </LaunchesProvider>
    );
};

export default Main;