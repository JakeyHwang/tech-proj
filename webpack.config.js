var HTMLWebpackPlugin = require("html-webpack-plugin");
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + "/app/index.html",
  filename: "index.html",
  inject: "body",
});

const path = require("path");

module.exports = {
  mode: "development",

  entry: __dirname + "/src/index.js",

  output: {
    filename: "app.js",
    path: path.join(__dirname, "../", "build"),
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        loader: "babel-loader",
        exclude: /(node_modules)/,
        options: {
          presets: ["@babel/react", "@babel/preset-env"],
          plugins: ["@babel/proposal-class-properties"],
        },
      },
    ],
  },
  plugins: [HTMLWebpackPluginConfig],
};
