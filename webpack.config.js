const path = require('path')
const webpack = require('webpack')

const config = {
  //  入口點
  entry: ['./src/main.js'],

  //  伺服器
  devServer: {
    contentBase: './dist'
  },

  //   輸出點
  output: {
    path: path.resolve(__dirname, './dist'),

    filename: 'bundle.js'
  },

  //   儲存時自動編譯
  watch: true,

  module: {
    //   webpack loader
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
}

module.export = config

// 執行
// webpack -p
