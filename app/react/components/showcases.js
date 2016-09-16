import React, {Component} from "react";

class ShowCases extends Component {
    componentDidMount() {
        //Enable swiping...
        $(".carousel-inner").swipe( {
            //Generic swipe handler for all directions
            swipeLeft:function(event, direction, distance, duration, fingerCount) {
                $(this).parent().carousel('next');
            },
            swipeRight: function() {
                $(this).parent().carousel('prev');
            },
            //Default is 75px, set to 0 for demo so any distance triggers swipe
            threshold:75
        });
    }

    render() {
        return (
            <div className="body showcase">
                <div className="homeSlider showcaseSlider">
                    <div id="carousel-example-generic" className="carousel slide" data-ride="carousel"
                         data-interval="5000">
                        {/*<!-- Indicators -->*/}
                        <ol className="carousel-indicators">
                            <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                        </ol>

                        {/*<!-- Wrapper for slides -->*/}
                        <div className="carousel-inner" role="listbox">
                            <div className="item active">
                                <div className="wrapSlider">
                                    <img src="images/slides/_3-showcase/illustrazioni/illustrazioni_1.jpg" alt="VN">
                                    </img>

                                    <div className="carousel-caption">
                                        <div className="captionTitle">Illustrazioni</div>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="wrapSlider">
                                    <img src="images/slides/_3-showcase/illustrazioni/illustrazioni_2.jpg" alt="VN">
                                    </img>

                                    <div className="carousel-caption">
                                        <div className="captionTitle">Illustrazioni</div>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="wrapSlider">
                                    <img src="images/slides/_3-showcase/illustrazioni/illustrazioni_3.jpg" alt="VN">
                                    </img>

                                    <div className="carousel-caption">
                                        <div className="captionTitle">Illustrazioni</div>
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

export default ShowCases;
