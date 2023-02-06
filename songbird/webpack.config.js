const webpack = require("webpack");

const path = require("path");

module.exports = {
  entry: ["./src/js/index.js"],
  output: {
    publicPath: "./",
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      

      {
        test: /\.(png|svg|jpg|jpeg|woff)$/i,
        type: "asset/resource",
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  mode: "development",
};
