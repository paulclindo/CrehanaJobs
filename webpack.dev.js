const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "src/index.js")
  },

  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].bundle.js"
    // chunkFilename: "js/[id].[chunkash].js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    open: true,
    port: 9000
  },
  // resolve: {
  //   modules: [path.resolve(__dirname, "src"), "node_modules"]
  // },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        type: "javascript/auto",
        exclude: /node_modules\/(?!(apollo-client)\/).*/
      },
      // {
      //   test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
      //   use: {
      //     loader: "file-loader",
      //     options: {
      //       outPath: "assets"
      //     }
      //   }
      // },
      // {
      //   type: "javascript/auto",
      //   test: /\.mjs$/,
      //   use: []
      // },

      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: "graphql-tag/loader"
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html")
    })
  ]
};
