import React from 'react';
import {Switch, Route} from 'react-router-dom';
import pagePaths from './pagePaths';
import Home from '../components/Home';
import About from '../components/About';

const Routes = (
    <Switch>
        <Route exact path={pagePaths.HOME} component={Home} />
        <Route exact path={pagePaths.ABOUT} component={About} />
    </Switch>
);

export default Routes;
