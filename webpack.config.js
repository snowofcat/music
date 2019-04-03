const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    entry: {
        index: "./js/index.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [{
            test: /(\.js|\.jsx)$/,
            exclude: /(node_modules)/,
            use: ["babel-loader"]
        },{
            test: /\.vue$/,
            use: ["vue-loader"]
        },{
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        },{
            test: /\.(png|jpg|gif)$/,
            use: ["file-loader"]
        }, {
            test: /\.(eot|woff2|woff|svg|ttf)(\?v=\d+\.\d+\.\d+)?$/,
            use: "url-loader?name=[hash:8]-[name].[ext]"
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: "inline-source-map",
    resolve: {
        alias: {
            "vue": "vue/dist/vue.js"
        }
    },
    mode: "development",

}