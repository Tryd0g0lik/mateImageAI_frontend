const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
// const CopyPlugin = require("copy-webpack-plugin");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const BundleTracker = require('webpack-bundle-tracker');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = {
  mode: 'none',
  cache: false, 
  watch: true,
  entry:
  {
    index: {
      import: 'src\\index.ts',
      dependOn: 'shared'
    },
    // https://webpack.js.org/guides/code-splitting/#entry-dependencies
    another: {
      import: './src/map/another-module.ts',
      dependOn: 'shared',
    },
    shared: 'lodash',
  },
  optimization: {
    runtimeChunk: 'single',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'scripts/main-[id]-[fullhash].js',
    publicPath: '/',
    clean: true, 

  },
  // https://webpack.js.org/guides/code-splitting/#entry-dependencies
  optimization: {
    runtimeChunk: 'single',
    // minimize: false,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false, // Удалите все комментарии
          },
        },
        extractComments: false, // Не сохранять комментарии в отдельный файл
      }),
    ],

  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.(tsx|jsx|ts|js)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              configFile: path.resolve(__dirname, './babel.config.js'),
            }
          },
        ],
        exclude: [
          path.resolve(__dirname, "node_modules"),
          path.resolve(__dirname, "dist"),
        ]

      },

      {
        test: /\.s?[ac]ss$/i,
        exclude: /\.module\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          'postcss-loader',
          'sass-loader'

        ],

      },
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)$/i,
      //   type: 'asset/resource',

        
      // },
    ]
  },

  plugins: [
    new Dotenv(),
    new CleanWebpackPlugin(), 
    // new ChunksWebpackPlugin(
    //   { generateChunksFiles: false }
    // ),
   
    new BundleTracker({
      path: path.join(__dirname, 'dist/bundles'),
      filename: 'webpack-stats.json'
    }),
    new webpack.SourceMapDevToolPlugin({
      test: /\.tsx?$/,
      filename: '[file].map.[query]',
      include: path.resolve(__dirname, 'dist/bundles'),
      columns: true
    }),
    new HtmlWebpackPlugin({
      template: 'src/public/index.html',
      filename: "index.html"
    }),

    new ESLintPlugin({
      files: path.resolve(__dirname, 'src/'),

    }),
    new MiniCssExtractPlugin({
      filename: './statics/styles//[name].css'
    }),
  ],
  watchOptions: {
    ignored: [
      "node_modules",
      "**/node_modules",
      "dist"
    ]
  },
devServer: {
    static: {
      directory: path.resolve(__dirname, 'src'), 

    },

    watchFiles: [
      'src',

    ],
  
    hot: true, // Включение горячей перезагрузки
    liveReload: true, // Включение live-reload
    host: "127.0.0.1",
    compress: true,
    historyApiFallback: true,
    // open: true, // Автоматическое открытие браузера
    port: 8000
  },
  resolve: {
    extensions: [".tsx", ".jsx", ".ts", ".js", ".svg"],
    plugins: [new TsconfigPathsPlugin(),],
    modules: [
      path.resolve(__dirname, "node_modules"),
    ],
    alias: {
      // "media/catalog": path.resolve(__dirname, "src/media/catalog"),
      // "fonts": path.resolve(__dirname, "src/fonts"),
      "pictures": path.resolve(__dirname, "src/pictures"),
    },
    
  },

};
