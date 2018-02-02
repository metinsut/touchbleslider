import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import home from "./components/home";
import page1 from "./components/page1";
import page2 from "./components/page2";
import page3 from "./components/page3";
import Header from "./components/header";
import {withRouter} from "react-router";
import page4 from "./components/page4";

class App extends Component {

    render() {
        return (
            <React.Fragment>
                <Header/>
                <Switch>
                    <Route exact path="/" component={home}/>
                    <Route path="/pageone" component={page1}/>
                    <Route path="/pagetwo" component={page2}/>
                    <Route path="/pagethree" component={page3}/>
                    <Route path="/pagefour" component={page4}/>
                </Switch>
            </React.Fragment>
        );
    }
}

export default withRouter(App);
