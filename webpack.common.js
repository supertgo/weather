const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');


module.exports = {
    entry: './src/js/index.js',
    watch: true,
    plugins: [
        new Dotenv(),

        new HtmlWebpackPlugin({
            template: './src/template.html',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true,
            }
        }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
            {
                test: /\.(svg|png|jpg|jpeg|gif)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        esModule: false,
                        name: '[name][hash].[ext]',
                        outputPath: 'imgs',
                    },
                },
            },
        ]
    },

};