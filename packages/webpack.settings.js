const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: process.env.NODE_ENV !== "prod" ? "development" : "production",
    target: process.env.NODE_ENV !== "prod" ? "web" : "browserslist",
    output: {
        filename: "js/bundle.[contenthash:8].js",
        assetModuleFilename: "media/[contenthash:8][ext][query]",
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                    },
                },
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpe?g|gif|webm|mp4|svg)$/,
                type: "asset",
            },
        ],
    },
    optimization: {
        // runtimeChunk: "single",
        chunkIds: "named",
    },
    devtool: "cheap-module-source-map",
    plugins: [new MiniCssExtractPlugin()],
}