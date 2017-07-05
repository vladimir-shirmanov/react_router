const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'source-map',

    entry: ['bootstrap-loader/extractStyles'],

    output: {
        publicPath: 'dist/'
    },

    module:{
        rules:[
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader', 
                    'sass-loader'
                ]
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV: '"production"'
            },
            __DEVELOPMENT__: false
        }),
        new ExtractTextPlugin('bundle.css'),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};