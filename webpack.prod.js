const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');



module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: 'main[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.[contenthash].css'
        }),

        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['dist'],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: './',
                        }
                    },
                    'css-loader',
                    'sass-loader',
                ]
            }
        ]
    }
});