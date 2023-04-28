module.exports = {
    target: 'webworker',
    context: __dirname,
    entry: './src/index.ts',
    mode: 'development',
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
        ],
    },
}