import React, {Component} from "react";
import {Link} from "react-router";

class LeftPanel extends Component {

    closeLeftPanel() {
        $("#leftMenu").modal('hide');
    }

    render() {
        return (
            <div className="modal" id="leftMenu" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
                 data-backdrop="true">
                <div className="modal-dialog" role="document">
                    <div className="animated fadeInLeft modal-content">
                        <div className="modal-body">
                            <div className="btnArea">
                                <span>Chiudi</span><span className="btnClose" data-dismiss="modal"></span>
                            </div>

                            <div className="languageArea">
                                <div className="locale">EN</div>
                                <div className="locale">DE</div>
                                <div className="locale">FR</div>
                                <div className="locale active">IT</div>
                                <div className="locale">VN</div>
                            </div>

                            <div className="menuLinksArea">
                                <div onClick={this.closeLeftPanel.bind(this)} className="gotoLink"><Link to={'/home'}>Home
                                    page</Link></div>
                                <div onClick={this.closeLeftPanel.bind(this)} className="gotoLink"><Link to={'/about'}>Chi
                                    siamo</Link></div>
                                <div onClick={this.closeLeftPanel.bind(this)} className="gotoLink"><Link to={'/formal'}>Parlaci
                                    della tua idea</Link></div>
                                <div onClick={this.closeLeftPanel.bind(this)} className="gotoLink"><Link
                                    to={'/showcase'}>Showcase</Link></div>
                                <div onClick={this.closeLeftPanel.bind(this)} className="gotoLink"><Link
                                    to={'/product'}>La nostra marca</Link></div>
                                <div onClick={this.closeLeftPanel.bind(this)} className="gotoLink"><Link
                                    to={'/contact'}>Contatti</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LeftPanel;