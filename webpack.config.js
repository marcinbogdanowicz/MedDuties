const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: ['babel-polyfill', path.resolve(__dirname, 'frontend/index.js')],
        worker: ['babel-polyfill', path.resolve(__dirname, 'frontend/worker.js')]
    },
    output: {
        path: path.resolve(__dirname, "backend/apps/frontend/static/frontend/public/"),
        publicPath: "http://127.0.0.1:8000/static/frontend/public/",
        filename: '[name].js',
        chunkFilename: '[name].[contenthash].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /[\\/]node_modules[\\/]/,
                // for matching files, use the babel-loader
                use: {
                    loader: "babel-loader",
                    options: {presets: ["@babel/env"]}
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    optimization: {
        moduleIds: 'deterministic',
        splitChunks: {
            chunks: 'async',
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                }
            }
        },
    },
};
