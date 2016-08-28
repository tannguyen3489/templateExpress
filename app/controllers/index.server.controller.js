exports.render = function(req, res) {

    res.render('index', {
        title: 'Express',
        locale: 'de'
    });
};

exports.api = function(req, res) {

    res.send('aaaaaaaa');
};
