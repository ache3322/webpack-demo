// This file is for configuring webpack
//
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    //
    // The 'entry' point to our main js file
    //   note: when you specify 'app' or a key, the bundle will be named key.filename.js
    entry: {
        app: './src/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    //
    // The 'plugins' adds external libraries for webpack
    plugins: [
        // provides the HtmlWebpack plugin
        new HtmlWebpackPlugin({
            title: 'Output Management',  // title will be called this
            filename: 'index.html',       // name of the html file
            meta: {
                viewport: 'width=device-width, initial scale=1'
            }
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    //
    // The 'output' generates our compiled js file
    //  note: the [name] is taken from the key in the 'entry'
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist') // __dirname is the root
    },
    module: {
        rules: [
            {
                // loading css style sheet
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                // loading images, files
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                // loading fonts
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                // loading xml
                test: /\.(xml)$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    },
    mode: "production"
};