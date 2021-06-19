let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let {CleanWebpackPlugin} = require('clean-webpack-plugin'); //这里是分别暴露
module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test:/\.ts$/,
                use:[
                    {
                        loader: "babel-loader",
                        options: {
                            presets:[
                                [
                                    "@babel/preset-env",
                                    {
                                        targets:{
                                            "chrome":58,
                                            "ie":11
                                        },
                                        "corejs":3,
                                        "useBuiltIns":"usage"
                                    }]
                            ]
                        }
                    },
                    "awesome-typescript-loader"
                ],
                exclude: /node_modules/
            }
        ]
    },
    mode:"development",
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
        template: "./src/template.html"
    })
    ],
    resolve: {
        extensions: ['.ts','.js'] //引入时省略后缀名，查找哪些文件
    }
}