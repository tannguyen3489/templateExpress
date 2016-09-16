var path = require("path"), webpack = require('webpack');
var I18nPlugin = require("i18n-webpack-plugin");
var languages = {
    "en": require("./locales/en.json"),
    // "de": require("./locales/de.json")
};


var result = [];
var desktop = Object.keys(languages).map(function (language) {
    return {
        name: language,
        entry: [
            './app/react/index.js'
        ],
        output: {
            path: './public',
            filename: language + ".bundle.js"
        },
        module: {
            loaders: [{
                test: /\.jsx?$/,
                loaders: ['babel']
            }]
        },
        plugins: [
            new I18nPlugin(
                languages[language]
            ),
            // new webpack.optimize.UglifyJsPlugin()
        ]
    }
});

var tablet = Object.keys(languages).map(function (language) {
    return {
        name: language + "_tablet",
        entry: [
            './app/react/tabletindex.js'
        ],
        output: {
            path: './public/mobile',
            filename: language + ".tablet.bundle.js"
        },
        module: {
            loaders: [{
                test: /\.jsx?$/,
                loaders: ['babel']
            }]
        },
        plugins: [
            new I18nPlugin(
                languages[language]
            ),
            // new webpack.optimize.UglifyJsPlugin()
        ]
    };
});


var mobile = Object.keys(languages).map(function (language) {
    return {
        name: language + "_mobile",
        entry: [
            './app/react/mobileindex.js'
        ],
        output: {
            path: './public/mobile',
            filename: language + ".mobile.bundle.js"
        },
        module: {
            loaders: [{
                test: /\.jsx?$/,
                loaders: ['babel']
            }]
        },
        plugins: [
            new I18nPlugin(
                languages[language]
            ),
            // new webpack.optimize.UglifyJsPlugin()
        ]
    };
});


result = result.concat(desktop);
result = result.concat(mobile);
result = result.concat(tablet);

module.exports = result;