import React, {Component} from "react";

class Home extends Component {
    render() {
        return (
            <div className="body home">
                <div className="homeSlider">
                    <div id="carousel-example-generic" className="carousel slide" data-ride="carousel"
                         data-interval="50000000">
                        {/*<!-- Indicators -->*/}
                        <ol className="carousel-indicators">
                            <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                        </ol>

                        {/*<!-- Wrapper for slides -->*/}
                        <div className="carousel-inner" role="listbox">
                            <div className="item active">
                                <div className="wrapSlider">
                                    <img src="images/slides/_1-home page/svizzera.jpg" alt="Svizzera">
                                    </img>

                                    <div className="carousel-caption">
                                        <div className="captionTitle">ESPERIENZA NEL CAMPO</div>
                                        <div className="captionTitle">DELLA GRAFICA.</div>
                                        <div className="captionTitle">DALLA SVIZZERA...</div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="wrapSlider">
                                    <img src="images/slides/_1-home page/vietnam.jpg" alt="VN">
                                    </img>

                                    <div className="carousel-caption">
                                        <div className="captionTitle">ESPERIENZA NEL CAMPO</div>
                                        <div className="captionTitle">DELLA GRAFICA.</div>
                                        <div className="captionTitle">DALLA SVIZZERA...</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*<!-- Controls -->*/}
                        <a className="left carousel-control" href="#carousel-example-generic" role="button"
                           data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#carousel-example-generic" role="button"
                           data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>

                </div>
            </div>
        );
    }
}

export default Home;
