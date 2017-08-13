//Konfiguracja Webpack
const path = require("path");
const webpack = require('webpack');

module.exports = {
    entry: ['whatwg-fetch', './js/input.jsx', './scss/bundle.scss'],
    output: {
        path: path.resolve("dist"),
        filename: "output.js"
    },
    devServer:	{
        inline:	true,
        contentBase: './',
        port: 3001
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-2', 'react']
                }
            },
            {
                //npm i style-loader css-loader --save-dev
                //npm i node-sass sass-loader --save-dev
                test: /\.scss$/,
                loader: ['style-loader', 'css-loader', 'autoprefixer-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
    //npm i --save jquery
    new webpack.ProvidePlugin({
        $: 'jquery'
    })
  ]
}

//dev server
//npm install webpack-dev-server --save-dev

//localinstall webpack
//npm i --save-dev webpack
//launch
//./node_modules/.bin/webpack-dev-server --inline --hot
