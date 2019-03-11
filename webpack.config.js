const path = require('path')
const fs = require('fs')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  devServer: {
    compress: true,
    host: '0.0.0.0',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: [
          /node_modules/,
          /templates/,
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env",
            ],
            plugins: [
              ["@babel/plugin-transform-react-jsx", { "pragma": "h" }],
            ],
          },
        },
      },
      {
        test: /\.css$/,
        exclude: [
          /node_modules/,
          /templates/,
        ],
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Sheb rocks!',
      template: 'src/templates/index.html',
      inlineScript: fs.readFileSync('src/templates/inlineScript.js', 'utf8'),
      inlineStyle: fs.readFileSync('src/templates/inlineStyle.css', 'utf8'),
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
        minifyJS: true,
        minifyCSS: true,
      },
    }),
    new CopyWebpackPlugin([
      { from: 'src/assets', to: 'assets/' },
      { from: 'src/manifest.json', to: '.' },
      { from: 'src/sw.js', to: '.' },
    ]),
  ],
}
