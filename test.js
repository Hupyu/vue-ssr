var a = 

// 客户端webpack配置
{
  entry: './src/entry-client.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [{
      test: /\.js?$/,
      loader: 'babel-loader'
    },{
      test: /\.css?$/,
      use: ['style-loader', {
        loader: 'css-loader',
        options: {modules: true}
      }]
    },{
      test: /\.(png|jpeg|jpg|gif|svg)?$/,
      loader: 'url-loader',
      options: {
        limit: 8000,
        publicPath: '/'
      }
    }]
  }
}


var b = 

// 服务端webpack配置
{
  target: 'node',
  entry: './src/entry-server.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    libraryTarget: 'commonjs2'
  },
  externals: [nodeExternals({ allowlist: /\.(css|vue)$/ })],
  module: {
    rules: [{
      test: /\.js?$/,
      loader: 'babel-loader'
    },{
      test: /\.css?$/,
      use: ['isomorphic-style-loader', {
        loader: 'css-loader',
        options: {modules: true}
      }]
    },{
      test: /\.(png|jpeg|jpg|gif|svg)?$/,
      loader: 'url-loader',
      options: {
        limit: 8000,
        outputPath: '../public/',
        publicPath: '/'
      }
    }]
  }
};