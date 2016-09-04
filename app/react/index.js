import React, {Component} from "react";
import {render} from "react-dom";
import {browserHistory, Router, Route, IndexRoute, Link} from "react-router";
import Page1 from "./components/page1";
import Page2 from "./components/page2";


// first we import some components

class App extends Component {
    render() {
        return (
            <div className="rootApp">
                <div className="headerArea">
                    <nav className="navbar navbar-default navbar-static-top">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand menu" href="#">
                                    <img alt="Menu" src="/images/Menu_mobile.png"/>
                                </a>
                            </div>

                            <div className="navbar-header">
                                <a className="navbar-brand logo" href="#">
                                    <img alt="Logo" src="/images/Logo.png"/>
                                </a>
                            </div>

                            <p className="navbar-text rightMenu navbar-right"><span>Contatti</span><a href="#" className="navbar-link"></a></p>
                        </div>
                    </nav>
                </div>
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

