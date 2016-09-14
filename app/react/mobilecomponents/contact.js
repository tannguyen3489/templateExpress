import React, {Component} from "react";
import Contact from "../components/contact";

class MobileContact extends Contact {
    render() {
        return (
            <div className="body contact">
                <div className="formInfo contact lanscapseView">
                    <div className="container-fluid">
                        <form>
                            <div className="row formHeaderTitle noBorder">
                                <div className="col-md-4 col-sm-4 col-sm-offset-1">
                                    <h1 className="titleForm">Contatti</h1>
                                </div>
                                <div className="col-md-5 col-sm-5 col-sm-offset-1">
                                    <div className="phoneNumber">0041 78 933 24 53</div>
                                    <div className="contactEmail">jeanmarie.balogh@gmail.com</div>
                                </div>
                            </div>
                            <div className="row infoPart noBorder">
                                <div className="col-md-4 col-sm-4 col-sm-offset-1">
                                    <div className="form-group">
                                        <label htmlFor="name">NOME COGNOME</label>
                                        <input value="" type="text" className="form-control"
                                               id="name" placeholder="Name"/>
                                    </div>
                                </div>
                                <div className="col-md-5 col-sm-5 col-sm-offset-1">
                                    <div className="form-group">
                                        <label htmlFor="name">SOGGETTO DELLA LETTERA</label>
                                        <input value="" type="text" className="form-control"
                                               id="name" placeholder="Name"/>
                                    </div>
                                </div>
                            </div>


                            <div className="row infoPart noBorder">
                                <div className="col-md-4 col-sm-4 col-sm-offset-1">
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
                                <div className="col-md-5 col-sm-5 col-sm-offset-1">
                                    <div className="form-group">
                                        <label htmlFor="phone">CONTENUTO DELLA LETTERA</label>
                                        <textarea className="form-control finalComment" rows="3"></textarea>
                                    </div>
                                    <div className="nexButton btn myBtn"><span>Invio</span></div>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>

                <div className="formInfo contact portraitView">
                    <div className="container-fluid">
                        <form>
                            <div className="row formHeaderTitle noBorder">
                                <div className="col-md-6 col-sm-6">
                                    <h1 className="titleForm">Contatti</h1>
                                </div>
                                <div className="col-md-5 col-sm-5">
                                    <div className="phoneNumber">0041 78 933 24 53</div>
                                    <div className="contactEmail">jeanmarie.balogh@gmail.com</div>
                                </div>
                            </div>
                            <div className="row infoPart noBorder">
                                <div className="col-md-9 col-sm-9">
                                    <div className="form-group">
                                        <label htmlFor="name">NOME COGNOME</label>
                                        <input value="" type="text" className="form-control"
                                               id="name" placeholder="Name"/>
                                    </div>
                                </div>
                                <div className="col-md-9 col-sm-9">
                                    <div className="form-group">
                                        <label htmlFor="name">SOGGETTO DELLA LETTERA</label>
                                        <input value="" type="text" className="form-control"
                                               id="name" placeholder="Name"/>
                                    </div>
                                </div>
                            </div>


                            <div className="row infoPart noBorder">
                                <div className="col-md-9 col-sm-9">
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
                                <div className="col-md-9 col-sm-9">
                                    <div className="form-group">
                                        <label htmlFor="phone">CONTENUTO DELLA LETTERA</label>
                                        <textarea className="form-control finalComment" rows="3"></textarea>
                                    </div>
                                    <div className="nexButton btn myBtn"><span>Invio</span></div>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default MobileContact;
