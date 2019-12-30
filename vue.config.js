const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: process.env.VUE_APP_DEV_API_TARGET,
        pathRewrite: {
          '/api/*': '',
        },
      },
    },
  },
  configureWebpack: {
    devtool: 'source-map',
    plugins: [
      new StyleLintPlugin({
        files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}'],
      }),
    ],
  },
};
