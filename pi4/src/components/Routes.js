import React from 'react';
import {Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import {Initi} from '../pages/initi/index';
import {Teste} from '../pages/Teste/index';
import NotFound from './NotFound';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Initi}/>
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default Routes