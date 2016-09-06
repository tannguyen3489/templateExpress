import React, {Component} from "react";
import {render} from "react-dom";
import {browserHistory, Router, Route, IndexRoute, Link} from "react-router";
import LeftPanel from "./components/leftPanel";
import About from "./components/about";
import Contact from "./components/contact";
import Formal from "./components/formal";
import Home from "./components/home";
import Product from "./components/product";
import Showcase from "./components/showcases";


// first we import some components

class App extends Component {
    render() {

        var divStyle = {
            height: "1px"
        };

        return (
            <div id="root">
                <div id="rootApp">
                    <LeftPanel ></LeftPanel>
                <div className="headerArea">
                    <nav className="navbar navbar-default navbar-static-top">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand menu" href="#">
                                    <img alt="Menu" src="/images/Menu_mobile.png"/>
                                </a>
                                <a className="navbar-brand logo" href="/home">
                                    <img alt="Logo" src="/images/Logo.png"/>
                                </a>

                                <div className="collapsed navbar-toggle">
                                    <p className="navbar-text rightMenu">
                                        <span>Contatti</span>
                                        <a href="#" className="navbar-link"/>
                                    </p>
                                </div>
                            </div>

                            <div className="navbar-collapse collapse navbar-right" id="navbar" aria-expanded="false"
                                 style={divStyle}>
                                <p className="navbar-text rightMenu ">
                                    <span>Contatti</span>
                                    <a href="#" className="navbar-link"/>
                                </p>
                            </div>

                        </div>

                    </nav>
                </div>
                    <div className="body <%= fileName %>">
                        {this.props.children}
                    </div>
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

