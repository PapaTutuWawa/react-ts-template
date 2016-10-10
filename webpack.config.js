module.exports = {
    entry: "./app/main.tsx",
    output: {
        filename: "./dist/bundle.js",
    },

    // SourceMaps
    devtool: "source-map",

    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            // Let 'ts-loader' deal with ts(x) imports
            { test: /\.tsx?$/, loader: "ts-loader" }
        ],

        preLoaders: [
            // Let 'source-map-loader' re-process the sourcemaps
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    
    // https://www.typescriptlang.org/docs/handbook/react-&-webpack.html
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};