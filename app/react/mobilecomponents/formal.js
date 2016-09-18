import React, {Component} from "react";
import Formal from "../components/formal";
class MobileFormal extends Formal {
    componentDidMount() {
        console.info('Formal................');
        console.info("Refs", this.refs);
        console.info("Refs contextElement", this.refs["contextElement"]);
        this.contextElement = this.refs["contextElement"];

        $(this.contextElement).find('select').selectpicker({
            size: 4,
            maxOptions: 1
        });

    }

    render() {
        return (
            <div className="body formal" ref="contextElement">
                <div className="formInfo lanscapseView">
                    <div className="container-fluid">
                        <form>
                            <div className="row formHeaderTitle noBorder">
                                <div className="col-md-10 col-sm-10 col-sm-offset-1">
                                    <h1 className="titleForm">Parlaci della tua idea</h1>
                                </div>
                            </div>

                            <div className="row noBorder">
                                <div className="col-md-10 col-sm-10 col-sm-offset-1">
                                    <h1 className="titleForm">Informazioni personali</h1>
                                </div>
                            </div>

                            <div className="row infoPart noBorder">
                                <div className="col-md-10 col-sm-10 col-sm-offset-1">
                                    <div className="form-group">
                                        <label htmlFor="name">NOME E COGNOME</label>
                                        <input value="" type="text" className="form-control"
                                               id="name" placeholder="Name"/>
                                    </div>
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
                            </div>

                            <div className="row noBorder">
                                <div className="col-md-10 col-sm-10 col-sm-offset-1">
                                    <h1 className="titleForm">A proposito del mio progetto</h1>
                                </div>
                            </div>

                            <div className="row part1">
                                <div className="col-md-10 col-sm-10 col-sm-offset-1">

                                    <div className="form-group">
                                        <div className="form-group">
                                            <label htmlFor="">Si tratta di un nuovo progetto o di un rebrand
                                                ?</label>
                                        </div>
                                        <div className="selectWrap">
                                            <select className="form-control" multiple>
                                                <option selected>Selezionate la scelta</option>
                                                <option>Selezionate la scelta</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row part1">
                                <div className="col-md-10 col-sm-10 col-sm-offset-1">

                                    <div className="form-group">
                                        <div className="form-group">
                                            <label htmlFor="">In quanto tempo volete che sia terminato
                                                ?</label>
                                        </div>
                                        <div className="selectWrap">
                                            <select className="form-control" multiple>
                                                <option selected>Selezionate la scelta</option>
                                                <option>Selezionate la scelta</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row part1">
                                <div className="col-md-10 col-sm-10 col-sm-offset-1">

                                    <div className="form-group">
                                        <div className="form-group">
                                            <div className="form-group">
                                                <label htmlFor="">Quanto intendete investire ?</label>
                                            </div>
                                            <div className="selectWrap">
                                                <select className="form-control" multiple>
                                                    <option selected>Selezionate la scelta</option>
                                                    <option>Selezionate la scelta</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row part1">
                                <div className="labelInputGroup col-md-10 col-sm-10 col-sm-offset-1">
                                    <div className="form-group">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" value=""/>
                                                <span>Desidero delle illustrazioni per la mia marca.</span>
                                                <span className="fakeRadioBox"/>
                                            </label>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="row part1 bottomBorder">
                                <div className="labelInputGroup col-md-10 col-sm-10 col-sm-offset-1">

                                    <div className="form-group">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" value=""/>
                                                <span>Necessito di uno storyboard per il mio film o animazione.</span>
                                                <span className="fakeRadioBox"></span>
                                            </label>
                                        </div>
                                    </div>

                                </div>
                            </div>


                            <div className="row stampati noBorder">
                                <div className="col-md-10 col-sm-10 col-sm-offset-1">
                                    <h1 className="titleForm">Stampati commerciali</h1>
                                </div>
                            </div>

                            <div className="row">
                                <div className="labelInputGroup col-md-10 col-sm-10 col-sm-offset-1">
                                    <div className="form-group inputSelectGroup">
                                        <div className="checkbox">
                                            <label className="form-inline">
                                                <input type="checkbox" value=""/>
                                                <span>Biglietto da visita</span>
                                                <div className="selectWrap">
                                                    <select className="form-control" multiple>
                                                        <option selected>500 esemplari</option>
                                                        <option>500 esemplari</option>
                                                    </select>
                                                </div>
                                                <span className="fakeRadioBox"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="labelInputGroup col-md-10 col-sm-10 col-sm-offset-1">
                                    <div className="form-group inputSelectGroup">
                                        <div className="checkbox">
                                            <label className="form-inline">
                                                <input type="checkbox" value=""/>
                                                <span>Busta con carta intestata</span>
                                                <div className="selectWrap">
                                                <select className="form-control" multiple>
                                                    <option selected>100 esemplari</option>
                                                    <option>100 esemplari</option>
                                                </select>
                                                </div>
                                                <span className="fakeRadioBox"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="labelInputGroup col-md-10 col-sm-10 col-sm-offset-1">
                                    <div className="form-group inputSelectGroup">
                                        <div className="checkbox">
                                            <label className="form-inline">
                                                <input type="checkbox" value=""/>
                                                <span>Brochure</span>
                                                <div className="selectWrap">
                                                    <select className="form-control" multiple>
                                                        <option selected>24 pagine</option>
                                                        <option>24 pagine</option>
                                                    </select>
                                                </div>
                                                <span className="fakeRadioBox"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="labelInputGroup col-md-10 col-sm-10 col-sm-offset-1">
                                    <div className="form-group inputSelectGroup">
                                        <div className="checkbox">
                                            <label className="form-inline">
                                                <input type="checkbox" value=""/>
                                                <span>Pieghevole</span>
                                                <div className="selectWrap">
                                                    <select className="form-control" multiple>
                                                        <option selected>100 esemplari</option>
                                                        <option>100 esemplari</option>
                                                    </select>
                                                </div>
                                                <span className="fakeRadioBox"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="labelInputGroup labelTextareaGroup col-md-10 col-sm-10 col-sm-offset-1">
                                    <div className="form-group ">
                                        <div className="checkbox">
                                            <label className="">
                                                <input type="checkbox" value=""/>
                                                <span>Altro</span>
                                                <textarea className="form-control" rows="3"></textarea>
                                                <span className="fakeRadioBox"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row noBorder">
                                <div className="col-md-10 col-sm-10 col-sm-offset-1">
                                    <h1 className="titleForm">Grafica digitale</h1>
                                </div>
                            </div>

                            <div className="row part1">
                                <div className="labelInputGroup col-md-10 col-sm-10 col-sm-offset-1">
                                    <div className="form-group">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" value=""/>
                                                <span>Sito web</span>
                                                <span className="fakeRadioBox"></span>
                                            </label>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="row part1">
                                <div className="labelInputGroup col-md-10 col-sm-10 col-sm-offset-1">
                                    <div className="form-group">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" value=""/>
                                                <span>Applicazione per iPad o tablet</span>
                                                <span className="fakeRadioBox"></span>
                                            </label>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="row part1">
                                <div className="labelInputGroup col-md-10 col-sm-10 col-sm-offset-1">
                                    <div className="form-group">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" value=""/>
                                                <span>Applicazione per iPhone o Smartphone</span>
                                                <span className="fakeRadioBox"></span>
                                            </label>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="row">
                                <div className="labelInputGroup col-md-10 col-sm-10 col-sm-offset-1">
                                    <div className="form-group inputSelectGroup">
                                        <div className="checkbox">
                                            <label className="form-inline">
                                                <input type="checkbox" value=""/>
                                                <span>Video</span>
                                                <div className="selectWrap">
                                                    <select className="form-control" multiple>
                                                        <option selected>1 minuto</option>
                                                        <option>1 minuto</option>
                                                    </select>
                                                </div>
                                                <span className="fakeRadioBox"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="labelInputGroup col-md-10 col-sm-10 col-sm-offset-1">
                                    <div className="form-group inputSelectGroup">
                                        <div className="checkbox">
                                            <label className="form-inline">
                                                <input type="checkbox" value=""/>
                                                <span>3D</span>
                                                <div className="selectWrap">
                                                    <select className="form-control" multiple>
                                                        <option selected="true">1 minuto</option>
                                                        <option>1 minuto</option>
                                                    </select>
                                                </div>
                                                <span className="fakeRadioBox"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="labelInputGroup labelTextareaGroup col-md-10 col-sm-10 col-sm-offset-1">
                                    <div className="form-group ">
                                        <div className="checkbox">
                                            <label className="">
                                                <input type="checkbox" value=""/>
                                                <span>Altro</span>
                                                <textarea className="form-control" rows="3"></textarea>
                                                <span className="fakeRadioBox"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row noBorder">
                                <div className="col-md-10 col-sm-10 col-sm-offset-1">
                                    <h1 className="titleForm">Altri prodotti</h1>
                                </div>
                            </div>

                            <div className="row part1">
                                <div className="labelInputGroup col-md-10 col-sm-10 col-sm-offset-1">
                                    <div className="form-group">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" value=""/>
                                                <span>Packaging</span>
                                                <span className="fakeRadioBox"></span>
                                            </label>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="row part1">
                                <div className="labelInputGroup col-md-10 col-sm-10 col-sm-offset-1">
                                    <div className="form-group">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" value=""/>
                                                <span>Segnaletica</span>
                                                <span className="fakeRadioBox"></span>
                                            </label>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="row part1">
                                <div className="labelInputGroup col-md-10 col-sm-10 col-sm-offset-1">
                                    <div className="form-group">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" value=""/>
                                                <span>Posters</span>
                                                <span className="fakeRadioBox"></span>
                                            </label>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-10 col-sm-10 col-sm-offset-1">
                                    <h1 className="titleForm contenuti">Contenuti</h1>
                                </div>
                            </div>

                            <div className="row part1">
                                <div className="col-md-10 col-sm-10 col-sm-offset-1">

                                    <div className="form-group">
                                        <div className="form-group">
                                            <div className="form-group">
                                                <label htmlFor="">Qual è lo stato attuale dei vostri contenuti?</label>
                                            </div>
                                            <div className="selectWrap">
                                                <select className="form-control" multiple="true">
                                                    <option selected>Selezionate la scelta</option>
                                                    <option>Selezionate la scelta</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-10 col-sm-10 col-sm-offset-1">
                                    <h1 className="titleForm commentFinal">Commenti finali</h1>
                                </div>
                            </div>

                            <div className="row noBorder ">
                                <div className="col-md-10 col-sm-10 col-sm-offset-1">
                                    <textarea className="form-control finalComment" rows="3"></textarea>
                                </div>
                            </div>

                            <div className="row noBorder nextBtn">
                                <div className="col-md-10 col-sm-10 col-sm-offset-1">
                                    <div className="nexButton btn myBtn">
                                        <span>Invio</span>
                                    </div>
                                </div>
                            </div>


                        </form>
                    </div>
                </div>

                <div className="formInfo portraitView">
                    <div className="container-fluid">
                        <form>
                            <div className="row formHeaderTitle noBorder">
                                <div className="col-md-12 col-sm-12">
                                    <h1 className="titleForm">Parlaci della tua idea</h1>
                                </div>
                            </div>

                            <div className="row noBorder">
                                <div className="col-md-12 col-sm-12">
                                    <h1 className="titleForm">Informazioni personali</h1>
                                </div>
                            </div>

                            <div className="row infoPart noBorder">
                                <div className="col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <label htmlFor="name">NOME E COGNOME</label>
                                        <input value="" type="text" className="form-control"
                                               id="name" placeholder="Name"/>
                                    </div>
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
                            </div>

                            <div className="row noBorder">
                                <div className="col-md-12 col-sm-12">
                                    <h1 className="titleForm">A proposito del mio progetto</h1>
                                </div>
                            </div>

                            <div className="row part1">
                                <div className="col-md-12 col-sm-12">

                                    <div className="form-group">
                                        <div className="form-group">
                                            <label htmlFor="">Si tratta di un nuovo progetto o di un rebrand
                                                ?</label>
                                        </div>
                                        <div className="selectWrap">
                                            <select className="form-control" multiple>
                                                <option selected>Selezionate la scelta</option>
                                                <option>Selezionate la scelta</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row part1">
                                <div className="col-md-12 col-sm-12">

                                    <div className="form-group">
                                        <div className="form-group">
                                            <label htmlFor="">In quanto tempo volete che sia terminato
                                                ?</label>
                                        </div>
                                        <div className="selectWrap">
                                            <select className="form-control" multiple>
                                                <option selected>Selezionate la scelta</option>
                                                <option>Selezionate la scelta</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row part1">
                                <div className="col-md-12 col-sm-12">

                                    <div className="form-group">
                                        <div className="form-group">
                                            <div className="form-group">
                                                <label htmlFor="">Quanto intendete investire ?</label>
                                            </div>
                                            <div className="selectWrap">
                                                <select className="form-control" multiple>
                                                    <option selected>Selezionate la scelta</option>
                                                    <option>Selezionate la scelta</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row part1">
                                <div className="labelInputGroup col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" value=""/>
                                                <span>Desidero delle illustrazioni per la mia marca.</span>
                                                <span className="fakeRadioBox"/>
                                            </label>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="row part1 bottomBorder">
                                <div className="labelInputGroup col-md-12 col-sm-12">

                                    <div className="form-group">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" value=""/>
                                                <span>Necessito di uno storyboard per il mio film o animazione.</span>
                                                <span className="fakeRadioBox"></span>
                                            </label>
                                        </div>
                                    </div>

                                </div>
                            </div>


                            <div className="row stampati noBorder">
                                <div className="col-md-12 col-sm-12">
                                    <h1 className="titleForm">Stampati commerciali</h1>
                                </div>
                            </div>

                            <div className="row">
                                <div className="labelInputGroup col-md-12 col-sm-12">
                                    <div className="form-group inputSelectGroup">
                                        <div className="checkbox">
                                            <label className="form-inline">
                                                <input type="checkbox" value=""/>
                                                <span>Biglietto da visita</span>
                                                <div className="selectWrap">
                                                    <select className="form-control" multiple>
                                                        <option selected>500 esemplari</option>
                                                        <option>500 esemplari</option>
                                                    </select>
                                                </div>

                                                <span className="fakeRadioBox"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="labelInputGroup col-md-12 col-sm-12">
                                    <div className="form-group inputSelectGroup">
                                        <div className="checkbox">
                                            <label className="form-inline">
                                                <input type="checkbox" value=""/>
                                                <span>Busta con carta intestata</span>
                                                <div className="selectWrap">
                                                    <select className="form-control" multiple>
                                                        <option selected>100 esemplari</option>
                                                        <option>100 esemplari</option>
                                                    </select>
                                                </div>

                                                <span className="fakeRadioBox"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="labelInputGroup col-md-12 col-sm-12">
                                    <div className="form-group inputSelectGroup">
                                        <div className="checkbox">
                                            <label className="form-inline">
                                                <input type="checkbox" value=""/>
                                                <span>Brochure</span>
                                                <div className="selectWrap">
                                                    <select className="form-control" multiple>
                                                        <option selected>24 pagine</option>
                                                        <option>24 pagine</option>
                                                    </select>
                                                </div>

                                                <span className="fakeRadioBox"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="labelInputGroup col-md-12 col-sm-12">
                                    <div className="form-group inputSelectGroup">
                                        <div className="checkbox">
                                            <label className="form-inline">
                                                <input type="checkbox" value=""/>
                                                <span>Pieghevole</span>
                                                <div className="selectWrap">
                                                    <select className="form-control" multiple>
                                                        <option selected>100 esemplari</option>
                                                        <option>100 esemplari</option>
                                                    </select>
                                                </div>

                                                <span className="fakeRadioBox"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="labelInputGroup labelTextareaGroup col-md-12 col-sm-12">
                                    <div className="form-group ">
                                        <div className="checkbox">
                                            <label className="">
                                                <input type="checkbox" value=""/>
                                                <span>Altro</span>
                                                <textarea className="form-control" rows="3"></textarea>
                                                <span className="fakeRadioBox"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row noBorder">
                                <div className="col-md-12 col-sm-12">
                                    <h1 className="titleForm">Grafica digitale</h1>
                                </div>
                            </div>

                            <div className="row part1">
                                <div className="labelInputGroup col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" value=""/>
                                                <span>Sito web</span>
                                                <span className="fakeRadioBox"></span>
                                            </label>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="row part1">
                                <div className="labelInputGroup col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" value=""/>
                                                <span>Applicazione per iPad o tablet</span>
                                                <span className="fakeRadioBox"></span>
                                            </label>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="row part1">
                                <div className="labelInputGroup col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" value=""/>
                                                <span>Applicazione per iPhone o Smartphone</span>
                                                <span className="fakeRadioBox"></span>
                                            </label>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="row">
                                <div className="labelInputGroup col-md-12 col-sm-12">
                                    <div className="form-group inputSelectGroup">
                                        <div className="checkbox">
                                            <label className="form-inline">
                                                <input type="checkbox" value=""/>
                                                <span>Video</span>
                                                <div className="selectWrap">
                                                    <select className="form-control" multiple>
                                                        <option selected>1 minuto</option>
                                                        <option>1 minuto</option>
                                                    </select>
                                                </div>

                                                <span className="fakeRadioBox"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="labelInputGroup col-md-12 col-sm-12">
                                    <div className="form-group inputSelectGroup">
                                        <div className="checkbox">
                                            <label className="form-inline">
                                                <input type="checkbox" value=""/>
                                                <span>3D</span>
                                                <div className="selectWrap">
                                                    <select className="form-control" multiple>
                                                        <option selected="true">1 minuto</option>
                                                        <option>1 minuto</option>
                                                    </select>
                                                </div>

                                                <span className="fakeRadioBox"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="labelInputGroup labelTextareaGroup col-md-12 col-sm-12">
                                    <div className="form-group ">
                                        <div className="checkbox">
                                            <label className="">
                                                <input type="checkbox" value=""/>
                                                <span>Altro</span>
                                                <textarea className="form-control" rows="3"></textarea>
                                                <span className="fakeRadioBox"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row noBorder">
                                <div className="col-md-12 col-sm-12">
                                    <h1 className="titleForm">Altri prodotti</h1>
                                </div>
                            </div>

                            <div className="row part1">
                                <div className="labelInputGroup col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" value=""/>
                                                <span>Packaging</span>
                                                <span className="fakeRadioBox"></span>
                                            </label>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="row part1">
                                <div className="labelInputGroup col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" value=""/>
                                                <span>Segnaletica</span>
                                                <span className="fakeRadioBox"></span>
                                            </label>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="row part1">
                                <div className="labelInputGroup col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" value=""/>
                                                <span>Posters</span>
                                                <span className="fakeRadioBox"></span>
                                            </label>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12 col-sm-12">
                                    <h1 className="titleForm contenuti">Contenuti</h1>
                                </div>
                            </div>

                            <div className="row part1">
                                <div className="col-md-12 col-sm-12">

                                    <div className="form-group">
                                        <div className="form-group">
                                            <div className="form-group">
                                                <label htmlFor="">Qual è lo stato attuale dei vostri contenuti?</label>
                                            </div>
                                            <div className="selectWrap">
                                                <select className="form-control" multiple="true">
                                                    <option selected>Selezionate la scelta</option>
                                                    <option>Selezionate la scelta</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12 col-sm-12">
                                    <h1 className="titleForm commentFinal">Commenti finali</h1>
                                </div>
                            </div>

                            <div className="row noBorder ">
                                <div className="col-md-12 col-sm-12">
                                    <textarea className="form-control finalComment" rows="3"></textarea>
                                </div>
                            </div>

                            <div className="row noBorder nextBtn">
                                <div className="col-md-12 col-sm-12">
                                    <div className="nexButton btn myBtn">
                                        <span>Invio</span>
                                    </div>
                                </div>
                            </div>


                        </form>
                    </div>
                </div>

                {/*finish for formal*/}
            </div>
        );
    }
}

export default MobileFormal;
