<<<<<<< HEAD
// npm init -y
// npm i -D webpack webpack-cli
// npm i -D sass style-loader css-loader sass-loader
// npm i -D html-webpack-plugin

// combined
// npm i -D webpack webpack-cli sass style-loader css-loader sass-loader html-webpack-plugin

// optional
// npm i -D babel-loader @babel/core @babel/preset-env
// npm i axios
=======
// npm init
// npm install webpack webpack-cli --save-dev
// npm install --save-dev html-webpack-plugin
// npm i -D sass style-loader css-loader sass-loader
>>>>>>> 226232409c47e2f34ddeaeb090b470ce26d04685

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// npm i -D webpack-bundle-analyzer
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src/js/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
<<<<<<< HEAD
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/i,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
=======
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
>>>>>>> 226232409c47e2f34ddeaeb090b470ce26d04685
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Template",
      filename: "index.html",
      template: "src/templates/index.html",
    }),
    // new BundleAnalyzerPlugin(),
  ],
};
