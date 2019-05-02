import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';

export default {
  mode: process.env.NODE_ENV || 'development',
  context: path.join(__dirname, './src/styles'),
  entry: {
    style: './style.scss',
  },
  output: {
    path: path.join(__dirname, './src'),
    filename: 'app.css'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('app.css')
  ]
}
