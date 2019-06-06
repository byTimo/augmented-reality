import {Configuration} from "webpack";
import * as path from "path";

const HtmlWebpackPlugin = require("html-webpack-plugin");

const config: Configuration = {
    entry: "./src/index.ts",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    mode: "development",
    module: {
        rules: [{
            test: /\.ts/,
            loader: "ts-loader"
        }, {
            test: /\.css/,
            use: [
                "style-loader",
                {loader: "css-loader", options: {modules: true}}
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    devtool: "inline-source-map",
    devServer: {
        port: 8080,
        host: "0.0.0.0"
    }
};

module.exports = config;
