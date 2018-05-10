"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.server = server;
function server() {
    return {
        port: 3000,
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        open: false
    };
}