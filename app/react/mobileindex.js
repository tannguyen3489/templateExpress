import React, {Component} from "react";
import ReactUpdate from 'react-addons-update';
import {render} from "react-dom";
import {browserHistory, Router, Route, IndexRoute, Link} from "react-router";
import LeftPanel from "./mobilecomponents/leftPanel";
import About from "./mobilecomponents/about";
import Contact from "./mobilecomponents/contact";
import Formal from "./mobilecomponents/formal";
import Home from "./mobilecomponents/home";
import Product from "./mobilecomponents/product";
import Showcase from "./mobilecomponents/showcases";


// first we import some components

class App extends Component {

    constructor() {
        super();
        this.state = {
            nextBtnTitle: "Chi siamo"
        };
    }

    updateNextBtnTitle(title) {

        var newState = ReactUpdate(this.state, {
            nextBtnTitle: title
        });

        this.setState(newState);
    }


    render() {

        var divStyle = {
            height: "1px"
        };

        return (
            <div id="root">
                <div id="rootApp" className="mobile">
                    <LeftPanel ></LeftPanel>
                    <div className="headerArea">
                        <nav className="navbar navbar-default navbar-static-top">
                            <div className="container-fluid">
                                <div className="navbar-header">
                                    <a className="navbar-brand menu" href="#">
                                        <img alt="Menu" src="/images/Menu_mobile.png"/>
                                    </a>
                                    <Link className="navbar-brand logo" to={'/home'}><img alt="Logo"
                                                                                          src="/images/Logo.png"/></Link>

                                    <div className="collapsed navbar-toggle">
                                        <p className="navbar-text rightMenu">
                                            <span>{this.state.nextBtnTitle}</span>
                                            <a href="#" className="navbar-link"/>
                                        </p>
                                    </div>
                                </div>

                                <div className="navbar-collapse collapse navbar-right" id="navbar" aria-expanded="false"
                                     style={divStyle}>
                                    <p className="navbar-text rightMenu ">
                                        <span>{this.state.nextBtnTitle}</span>
                                        <a href="#" className="navbar-link"/>
                                    </p>
                                </div>

                            </div>
                        </nav>
                    </div>
                    {this.props.children}
                </div>

            </div>
        );
    }
}

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            {/*<Route path="page1" component={Page1} title="Page1"/>*/}
            {/*<Route path="page2" component={Page2} title="Page2"/>*/}
            <Route path="about" component={About} title="About"/>
            <Route path="contact" component={Contact} title="Contact"/>
            <Route path="formal" component={Formal} title="Formal"/>
            <Route path="home" component={Home} title="Home"/>
            <Route path="product" component={Product} title="Product"/>
            <Route path="showcase" component={Showcase} title="Showcases"/>
        </Route>
    </Router>
), document.getElementById('root'));

