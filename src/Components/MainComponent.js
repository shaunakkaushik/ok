import React, { Component } from 'react';
import { PLUMBERS } from '../shared/plumbers';
import Plumbers from './PlumberComponent';
import Home from './HomeComponent';
import RegisterPro from "./RegisterProComponent";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';


class Main extends Component{

    constructor(props) {
        super(props);
        this.state = {
            plumbers: PLUMBERS
        };
      }
    

    render(){

        const Homepage = () => {
            return(
                <Home />
            );
        }

        return(
            <Switch>
                <Route path="/home" component={Homepage} />
                <Route exact path="/plumbers" component={() => <Plumbers plumbers={this.state.plumbers} />} />
                <Route exact path="/proregister" component={RegisterPro} />
                <Redirect to="/home" />
            </Switch>
        );
    }
  
}

export default Main;