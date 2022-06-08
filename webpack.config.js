module.exports = {
    mode: "development",
    module: {
      rules: [
        {
          test: /\.js$/,
          use: "babel-loader",
        },
      ],
    },
    devServer: {
      open: true,
      static: 'dist'
    },
  };