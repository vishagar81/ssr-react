import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import List from './List';
import Home from './Home';

class App extends Component {
    render() {
        const {pokemon} = this.props;
        return (
            <div>
                Your React Node App is set up
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/pokemon' exact render={ () => (<Redirect to="/pokemon/ability/telepathy" />)} />
                    <Route path='/pokemon/ability/:ability' render={ (location) => (<List pokemon={pokemon.list} location={location} />)} />
                </Switch>
            </div>
        )
    }
  }

  export default App;