require("dotenv").config();

const path = require("path");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

const baseWebpackConfig = require("../webpack.settings");
const deps = require("./package.json").dependencies;

module.exports = merge(baseWebpackConfig, {
    entry: "./src/Main",
    output: {
        clean: true,
        publicPath: process.env.PUBLIC_PATH,
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".css", ".scss", ".png"],
        alias: {
            "@": path.join(__dirname, "src"),
        },
    },
    stats: {
        chunks: true,
        colors: true,
        modules: false,
        chunkModules: true,
        chunkOrigins: true,
    },
    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath: "/" },
                    },
                    "postcss-loader",
                    {
                        loader: "css-loader",
                    },
                    "sass-loader",
                ],
            },
        ],
    },
    devServer: {
        hot: true,
        historyApiFallback: true,
        compress: true,
        port: 3000,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "@ecommerce/appshell",
            shared: {
                react: {
                    singleton: true,
                    requiredVersion: deps.react,
                },
                "react-dom": {
                    singleton: true,
                    requiredVersion: deps["react-dom"],
                },
                "react-router-dom": {
                    singleton: true,
                    requiredVersion: deps["react-router-dom"],
                },
            },
        }),
        new HtmlWebpackPlugin({
            template: `./config/html/index.${
                process.env.NODE_ENV || "dev"
            }.html`,
        })
    ],
});