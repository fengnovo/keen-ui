const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: {
        index: './src/index.js',
        button: './packages/button',
        aside: './packages/aside',
        main: './packages/main',
        container: './packages/container',
        header: './packages/header',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'lib'),
        library: {
            name: 'KUI',
            type: 'umd'
        },
        clean: true
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: {
                loader: 'vue-loader'
            }
        }]
    },
    externals: ['vue'],
    plugins: [
        new VueLoaderPlugin()
    ]
}