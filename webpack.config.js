const webpack = require('webpack');
const path = require("path");

module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: __dirname,
        filename: './build/index.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                // use: [
                //     {
                //         loader: 'babel-loader',
                //         options: {
                //             presets: ['@babel/preset-env']
                //         }
                //     }
                // ]
            },
        ]
    },

};
