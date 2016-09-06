import React, {Component} from "react";

class About extends Component {
    render() {
        return (
            <div className="body about">
                <div className="contact">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-9 col-sm-9 col-md-offset-1 ">
                                <h1 className="titleForm">Chi siamo</h1>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-9 col-sm-9 col-md-offset-1 ">
                                <p>
                                    Siamo un team con delle competenze specifiche che spaziano dalla grafica, la
                                    programmazione per siti
                                    internet, l’architettura e lo spazio urbano, possiamo rispondere a tutte le vostre
                                    esigenze inerenti
                                    alla concezione grafica e di design, siamo in grado di offrire degli ottimi servizi
                                    legati alle
                                    tecniche di stampa, di segnaletica e possiamo realizzare diversi progetti digitali
                                    quali la
                                    creazione di siti web, animazioni, video e 3D.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row ownerInfo">
                            <div className="col-md-3 col-sm-3 col-md-offset-1 ">
                                <div className="userImage">
                                    <img src="images/slides/_2-team/Milo.png"/>
                                </div>
                            </div>
                            <div className="col-md-7 col-sm-7">

                                <div className="infos">
                                    <div className="info">
                                        Jean–Marie Balogh
                                    </div>
                                    <div className="info">
                                        Grafico, web designer e illustratore
                                    </div>
                                    <div className="info">
                                        jeanmarie.balogh@gmail.com
                                    </div>
                                    <div className="info">
                                        078 933 24 53
                                    </div>
                                    <div className="btn viewProfile myBtn" data-toggle="modal" data-target="#miloModal">
                                        Per saperne di più
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row ownerInfo">
                            <div className="col-md-3 col-sm-3 col-md-offset-1 ">
                                <div className="userImage">
                                    <img src="images/slides/_2-team/Huy.png"/>
                                </div>
                            </div>
                            <div className="col-md-7 col-sm-7">

                                <div className="infos">
                                    <div className="info">
                                        Nguyen Thi Minh Huy
                                    </div>
                                    <div className="info">
                                        Architetto, architetto urbanista e 3D designer
                                    </div>
                                    <div className="info">
                                        jeanmarie.balogh@gmail.com
                                    </div>
                                    <div className="info">
                                        078 933 24 53
                                    </div>
                                    <div className="btn viewProfile myBtn" data-toggle="modal" data-target="#huyModal">
                                        Per saperne di più
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row ownerInfo">
                            <div className="col-md-3 col-sm-3 col-md-offset-1 ">
                                <div className="userImage">
                                    <img src="images/slides/_2-team/Eric.png"/>
                                </div>
                            </div>
                            <div className="col-md-7 col-sm-7">

                                <div className="infos">
                                    <div className="info">
                                        Eric Spichiger
                                    </div>
                                    <div className="info">
                                        Web Master
                                    </div>
                                    <div className="info">
                                        jeanmarie.balogh@gmail.com
                                    </div>
                                    <div className="info">
                                        078 933 24 53
                                    </div>
                                    <div className="btn viewProfile myBtn" data-toggle="modal" data-target="#ericModal">
                                        Per saperne di più
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className="row chiSite">
                            <div className="col-md-9 col-sm-9 col-md-offset-1">
                                <h1 className="titleForm">Chi siete ?</h1>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-9 col-sm-9 col-md-offset-1">
                                <p>
                                    Ora che avete dato uno sguardo ai nostri profili e avete visto le nostre competenze,
                                    vorremmo anche
                                    saper e chi siete, per cominciare a soddisfare le vostre esigenze e capire al meglio
                                    quello che
                                    necessitate in modo da definire il tempo e il vostro budget a disposizione per la
                                    realizzazione dei
                                    vostri progetti.
                                </p>
                                <p>
                                    Siamo conformi a persone che vogliono investire per un design unico e specifico,
                                    oppure a chi
                                    necessitano di qualcosa di semplice con un prezzo conveniente pur mantenendo una
                                    buona qualita dei
                                    prodotti.
                                </p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-9 col-sm-9 col-md-offset-1">
                                <div className="btn nextPage myBtn">Parlaci della tua idea</div>
                            </div>
                        </div>
                    </div>

                    <div className="modal fade userInfoModal" id="miloModal" tabIndex="-1" role="dialog"
                         aria-labelledby="myModalLabel">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <div className="btnArea">
                                        <div className="btn myBtn closeBtn" data-dismiss="modal">Chiudi</div>
                                    </div>
                                    <div className="row ownerInfo">
                                        <div className="col-md-12 col-sm-12">
                                            <div className="userImage">
                                                <img src="images/slides/_2-team/Milo.png"/>
                                            </div>

                                            <div className="infos">
                                                <div className="info">
                                                    Jean–Marie Balogh
                                                </div>
                                                <div className="info">
                                                    Grafico, web designer e illustratore
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row ownerInfo">
                                        <div className="col-md-12 col-sm-12">
                                            <p>
                                                Nato a Locarno nel 1980, mi sono diplomato come grafico illustratore
                                                alla Scuola del Fumetto di Milano, grafico federale al CSIA di Lugano e
                                                web design presso la SAE Institute di Ginevra.
                                                <br/>
                                                <br/>
                                                Sono in grado di rispondere alle vostre esigenze concezione di prodotti
                                                grafici, qualsiasi prodotto stampato.
                                                <br/>
                                                <br/>
                                                Le mie qualita principali vanno dal disegno, conoscenze tipografiche,
                                                storia dell’arte, arricchite da numerosi viaggi ed esperienze svolte
                                                all’estero.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="modal fade userInfoModal" id="huyModal" tabIndex="-s" role="dialog"
                         aria-labelledby="myModalLabel">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <div className="btnArea">
                                        <div className="btn myBtn closeBtn" data-dismiss="modal">Chiudi</div>
                                    </div>
                                    <div className="row ownerInfo">
                                        <div className="col-md-12 col-sm-12">
                                            <div className="userImage">
                                                <img src="images/slides/_2-team/Huy.png"/>
                                            </div>

                                            <div className="infos">
                                                <div className="info">
                                                    Nguyen Thi Minh Huy
                                                </div>
                                                <div className="info">
                                                    Architetto, architetto urbanista e 3D designer
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row ownerInfo">
                                        <div className="col-md-12 col-sm-12">
                                            <p>
                                                Nato a Locarno nel 1980, mi sono diplomato come grafico illustratore
                                                alla Scuola del Fumetto di Milano, grafico federale al CSIA di Lugano e
                                                web design presso la SAE Institute di Ginevra.
                                                <br/>
                                                <br/>
                                                Sono in grado di rispondere alle vostre esigenze concezione di prodotti
                                                grafici, qualsiasi prodotto stampato.
                                                <br/>
                                                <br/>
                                                Le mie qualita principali vanno dal disegno, conoscenze tipografiche,
                                                storia dell’arte, arricchite da numerosi viaggi ed esperienze svolte
                                                all’estero.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="modal fade userInfoModal" id="ericModal" tabIndex="-1" role="dialog"
                         aria-labelledby="myModalLabel">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <div className="btnArea">
                                        <div className="btn myBtn closeBtn" data-dismiss="modal">Chiudi</div>
                                    </div>
                                    <div className="row ownerInfo">
                                        <div className="col-md-12 col-sm-12">
                                            <div className="userImage">
                                                <img src="images/slides/_2-team/Eric.png"/>
                                            </div>

                                            <div className="infos">
                                                <div className="info">
                                                    Eric Spichiger
                                                </div>
                                                <div className="info">
                                                    Web Master
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row ownerInfo">
                                        <div className="col-md-12 col-sm-12">
                                            <p>
                                                Nato a Locarno nel 1980, mi sono diplomato come grafico illustratore
                                                alla Scuola del Fumetto di Milano, grafico federale al CSIA di Lugano e
                                                web design presso la SAE Institute di Ginevra.
                                                <br/>
                                                <br/>
                                                Sono in grado di rispondere alle vostre esigenze concezione di prodotti
                                                grafici, qualsiasi prodotto stampato.
                                                <br/>
                                                <br/>
                                                Le mie qualita principali vanno dal disegno, conoscenze tipografiche,
                                                storia dell’arte, arricchite da numerosi viaggi ed esperienze svolte
                                                all’estero.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
