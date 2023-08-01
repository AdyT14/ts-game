const { join, resolve } = require('path')

module.exports = {
    entry: {
        main: join(__dirname, 'src', 'main.ts'),
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist'),
    },
    devServer: {
        static: {
            directory: join(__dirname, 'public'),
        },
        liveReload: true,
        compress: true,
        port: 9000,
    },
}
