const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  plugins: [new MiniCssExtractPlugin()],
  entry: {
    "gtk-3.0/gtk": path.resolve(__dirname, "src/gtk3.js"),
    "gtk-4.0/gtk": path.resolve(__dirname, "src/gtk4.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/[hash][ext][query]",
  },
  resolve: {
    alias: {
      $theme: path.resolve(__dirname, "./static/theme"),
      assets: path.resolve(__dirname, "./static/theme/assets"),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: "css-loader",
        options: {
          url: true,
          esModule: false,
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
