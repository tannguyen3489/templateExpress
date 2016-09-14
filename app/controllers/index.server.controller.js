var MobileDetect = require('mobile-detect');
exports.home = function(req, res) {
    res.render('homeindex', {
        title: 'Express',
        locale: 'en',
        fileName: 'home'
    });
};

exports.formal = function(req, res) {
    res.render('homeindex', {
        title: 'Express',
        locale: 'en',
        fileName: 'formal'
    });
};

exports.about = function(req, res) {
    res.render('homeindex', {
        title: 'Express',
        locale: 'en',
        fileName: 'about'
    });
};

exports.showcase = function(req, res) {
    res.render('homeindex', {
        title: 'Express',
        locale: 'en',
        fileName: 'showcase'
    });
};

exports.product = function(req, res) {
    res.render('homeindex', {
        title: 'Express',
        locale: 'en',
        fileName: 'product'
    });
};

exports.contact = function(req, res) {
    res.render('homeindex', {
        title: 'Express',
        locale: 'en',
        fileName: 'contact'
    });
};

exports.react = function(req, res) {
    var md = new MobileDetect(req.headers['user-agent']);
    console.log("aaaaaaaaaaaaaa", req.headers['user-agent']);
    var isMobile = md.mobile();
    var isPhone = md.phone();
    console.log("check", isMobile);
    console.log("check", isPhone);
    console.log("check", md.tablet());

    if (isMobile === "UnknownMobile") {
        isPhone = true;
    }

    res.render('index', {
        title: 'Express',
        locale: 'en',
        isMobile: isMobile,
        isPhone: isPhone,
        isTablet: md.tablet()
    });
};

exports.api = function(req, res) {
    res.send('aaaaaaaa');
};
