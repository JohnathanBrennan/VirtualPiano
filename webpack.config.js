const path = require('path');
const stylesHandler = "style-loader";

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  module: {
    rules: [
      {
        test: /\.?(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.mp3$/,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader',
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
}