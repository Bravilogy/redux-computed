var path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'stage-0', 'react' ]
                }
            }
        ]
    },
    devServer: {
        inline: true
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};
