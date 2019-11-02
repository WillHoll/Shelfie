import React from 'react';
import Form from './components/Form/Form.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import { Switch, Route } from 'react-router-dom';

export default (
    <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/add' component={Form}/>
        <Route path='/edit/:id' component={Form}/>
    </Switch>
)