var path = require("path"), webpack = require('webpack');
var I18nPlugin = require("i18n-webpack-plugin");
var languages = {
    "en": require("./locales/en.json"),
    "de": require("./locales/de.json")
};

module.exports = Object.keys(languages).map(function(language) {
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