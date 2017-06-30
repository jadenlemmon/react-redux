var path = require("path");
var webpack = require("webpack");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    devtool: 'eval',
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015"]
                }
            },
            {test: /\.scss$/, loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]}
        ]
    },
    devServer: {
        historyApiFallback: true
    }
};

module.exports = config;