import React, {Component} from "react";

class Contact extends Component {
    render() {
        return (
            <div className="body contact">
                <div className="formInfo contact">
                    <div className="container-fluid">
                        <form>
                            <div className="row formHeaderTitle noBorder">
                                <div className="col-md-4 col-sm-4">
                                    <h1 className="titleForm">Contatti</h1>
                                </div>
                                <div className="col-md-8 col-sm-8">
                                    <div className="phoneNumber">0041 78 933 24 53</div>
                                    <div className="contactEmail">jeanmarie.balogh@gmail.com</div>
                                </div>
                            </div>
                            <div className="row infoPart noBorder">
                                <div className="col-md-4 col-sm-4">
                                    <div className="form-group">
                                        <label htmlFor="name">NOME COGNOME</label>
                                        <input value="" type="text" className="form-control"
                                               id="name" placeholder="Name"/>
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-8">
                                    <div className="form-group">
                                        <label htmlFor="name">SOGGETTO DELLA LETTERA</label>
                                        <input value="" type="text" className="form-control"
                                               id="name" placeholder="Name"/>
                                    </div>
                                </div>
                            </div>


                            <div className="row infoPart noBorder">
                                <div className="col-md-4 col-sm-4">
                                    <div className="form-group">
                                        <label htmlFor="email">E-Mail</label>
                                        <input value="" type="email" className="form-control"
                                               id="email" placeholder="Email"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">TELEFONO</label>
                                        <input value="" type="tel" className="form-control"
                                               id="phone" placeholder="Phone"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="country">PAESE</label>
                                        <input value="" type="text" className="form-control"
                                               id="country" placeholder="Country"/>
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-8">
                                    <div className="form-group">
                                        <label htmlFor="phone">CONTENUTO DELLA LETTERA</label>
                                        <textarea className="form-control finalComment" rows="3"></textarea>
                                    </div>
                                    <div className="btn myBtn">
                                        Invio
                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
