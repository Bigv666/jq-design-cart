const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const path = require('path')
const list = require('./src/api/list.json')
module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },
  devServer: {
    contentBase: path.join(__dirname, './dist'),//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true,//实时刷新
    port: '9898', //端口号，默认8080
    proxy: {},
    before: app => {
      /* /api/list  是后面请求本地数据的url填写的内容，类似于请求接口；
       * data这个自己设定的变量，内定了json文件的路径；
       * 在api里面请求数据的data的时候，会自动帮忙转发到localhost:8080/test/a
       */
      app.get('/api/list.json', (req, res) => {
          res.json(list);
      })
  }
  },
  module: {
    rules: [
      // ...
      {
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        use: [MiniCssExtractPlugin.loader, 'css-loader','postcss-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'src')],
        use: ['babel-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 5000, // 小于5kb的会转成base64
              name: 'imgs/[name].[ext]'
            }
          }
        ]
    },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
      minify: { // 压缩HTML文件
        removeComments: true, // 移除HTML中的注释
        collapseWhitespace: true, // 删除空白符与换行符
        minifyCSS: true// 压缩内联css
      },
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ]
}