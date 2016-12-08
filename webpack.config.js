var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.tsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
   // Add `.ts` and `.tsx` as a resolvable extension.
   extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
 },
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loaders: ['react-hot', 'ts'],
      include: path.join(__dirname, 'src')
    }]
  }
};
