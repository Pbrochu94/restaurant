const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode:"development",
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"bundle.js",
        clean:true,
    },
    module:{
        rules:[{
            test:/\.css$/,
            use:["style-loader","css-loader"],
        }],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/mainPage.html",
            inject:"body",
            filename:"distMainPage.html"
        })
    ],
    devtool:"eval-source-map",
    devServer:{
        watchFiles:["src/**/*.html"],
        static: "./dist",
        hot: true,  // Active le Hot Module Replacement
        liveReload: true,  // Recharge la page si un fichier statique change
    }
}