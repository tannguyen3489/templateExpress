import React, {Component} from "react";
import {render} from "react-dom";
import {browserHistory, Router, Route, IndexRoute, Link} from "react-router";
import Page1 from "./components/page1";
import Page2 from "./components/page2";


// first we import some components

class App extends Component {
    render() {
        return (
            <div>
                <header>{ __("Hello World") }</header>
                <menu>
                    <ul>
                        <li><Link to="/page1">Page1</Link></li>
                        <li><Link to="/page2">Page2</Link></li>
                    </ul>
                </menu>
                {this.props.children}
            </div>
        );
    }
}

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Page1}/>
            <Route path="page1" component={Page1} title="Page1"/>
            <Route path="page2" component={Page2} title="Page2"/>
        </Route>
    </Router>
), document.getElementById('root'));

