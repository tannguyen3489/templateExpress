import React, {Component} from "react";

class Home extends Component {

    componentDidMount() {
        this.fitText();
        var me = this;

        //Enable swiping...
        // $(".carousel-inner").swipe( {
        //     //Generic swipe handler for all directions
        //     swipeLeft:function(event, direction, distance, duration, fingerCount) {
        //         $(this).parent().carousel('next');
        //     },
        //     swipeRight: function() {
        //         $(this).parent().carousel('prev');
        //     },
        //     //Default is 75px, set to 0 for demo so any distance triggers swipe
        //     threshold:75
        // });


        $('.carousel').on('slid.bs.carousel', function () {
            me.fitText();
        })
    }

    fitText() {
        jQuery(".body.home .captionTitle").fitText(2, {maxFontSize: '54px'});
    }

    render() {
        return (
            <div className="body home">
                <div className="homeSlider">
                    <div id="carousel-example-generic" className="carousel" data-ride="carousel"
                         data-interval="5000">
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
                                        <div className="captionTitle">ESPERIENZA INTERNAZIONALE</div>
                                        <div className="captionTitle">NEL SETTORE DELLA GRAFICA</div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="wrapSlider">
                                    <img src="images/slides/_1-home page/vietnam.jpg" alt="VN">
                                    </img>

                                    <div className="carousel-caption">
                                        <div className="captionTitle">VASTA GAMMA DI SERVIZI</div>
                                        <div className="captionTitle">E PRODOTTI DI COMUNICAZIONE</div>
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
