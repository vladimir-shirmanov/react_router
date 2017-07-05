const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',

    entry: [
        'bootstrap-loader',
        'webpack-hot-middleware/client',
        './src/index'
    ],
    output: {
        publicPath: '/dist/'
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options:{
                            loaclIdentName: '[path][name]--[local]'
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'precess.env': {
                NODE_ENV: '"development"'
            },
            __DEVELOPMENT__: true
        }),
        new ExtractTextPlugin('bundle.css'),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.ProvidePlugin({
            jQuery: 'jquery'
        })
    ]
};