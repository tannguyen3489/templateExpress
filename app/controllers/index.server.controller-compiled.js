'use strict';

exports.home = function (req, res) {
    res.render('homeindex', {
        title: 'Express',
        locale: 'en',
        fileName: 'home'
    });
};

exports.formal = function (req, res) {
    res.render('homeindex', {
        title: 'Express',
        locale: 'en',
        fileName: 'formal'
    });
};

exports.about = function (req, res) {
    res.render('homeindex', {
        title: 'Express',
        locale: 'en',
        fileName: 'about'
    });
};

exports.showcase = function (req, res) {
    res.render('homeindex', {
        title: 'Express',
        locale: 'en',
        fileName: 'showcase'
    });
};

exports.product = function (req, res) {
    res.render('homeindex', {
        title: 'Express',
        locale: 'en',
        fileName: 'product'
    });
};

exports.contact = function (req, res) {
    res.render('homeindex', {
        title: 'Express',
        locale: 'en',
        fileName: 'contact'
    });
};

exports.react = function (req, res) {
    res.render('index', {
        title: 'Express',
        locale: 'en'
    });
};

exports.api = function (req, res) {
    res.send('aaaaaaaa');
};

//# sourceMappingURL=index.server.controller-compiled.js.map