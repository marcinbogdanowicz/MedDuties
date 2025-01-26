const path = require('path');

module.exports = {
    // set mode to 'production' for prod files; see publicPath also
    mode: "development", 
    entry: {
        main: ['babel-polyfill', path.resolve(__dirname, 'frontend/index.js')],
        worker: ['babel-polyfill', path.resolve(__dirname, 'frontend/worker.js')]
    },
    output: {
        // options related to how webpack emits results

        // where compiled files go
        path: path.resolve(__dirname, 
            "backend/frontend/static/frontend/public/"),
        
        // 127.0.0.1/static/frontend/public/ where files 
        // are served from (can be changed for production)
        /* 
        "publicPath is essentially setting the location 
        where the application will find the React static files. 
        In development, just set it to where they’re emitted."
        Look at django collectstatic path.
        */
        publicPath: "/static/frontend/public/",
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                // regex test for js and jsx files
                test: /\.(js|jsx)?$/,
                // don't look in the node_modules/ folder
                exclude: /node_modules/,
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
};
