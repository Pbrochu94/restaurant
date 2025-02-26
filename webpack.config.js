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
            template:"./src/mainpage.html",
        })
    ]
}