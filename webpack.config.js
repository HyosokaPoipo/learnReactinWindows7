var path = require ('path');
var webpack = require ('webpack');

module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname),
        filename: 'bundle.js'
    },
    devServer: {
        inline:true,
        port:3333
    },
    module: {
        loaders:[
        {
            test:/\.jsx?$/,
            exclude:/node_modules/,
            loader:'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }
         ]
    }

}