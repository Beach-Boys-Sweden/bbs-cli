'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = rules;
function rules() {
    return {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }]
    };
}

function rules() {
    return [{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }, { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }, {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader", options: { importLoaders: 1 } }, { loader: "postcss-loader",
            options: {
                ident: 'postcss',
                plugins: function plugins(loader) {
                    return [require('postcss-import')({ root: loader.resourcePath }), require('postcss-cssnext')(), require('postcss-url')()];
                }
            }
        }]
    }, {
        test: /\.(jpg|png|svg)$/,
        use: {
            loader: "url-loader",
            options: {
                limit: 25000
            }
        }
    }];
}