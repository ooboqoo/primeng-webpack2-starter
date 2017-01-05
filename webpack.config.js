var webpack = require('webpack');
var path    = require('path');

module.exports = {

  entry: {
    'vendor': './app/vendor-jit.ts',
    'app':    './app/main-jit.ts',
  },

  output: {
    path: __dirname,              // 影响打包文件输出位置
    filename: 'build/[name].js',  // 影响 index 导入时的文件地址，采用该配置，输出的文件在 index 所处目录的 build 子目录下
  },

  devtool: 'source-map',  // eval-cheap-module-source-map 重编译时效率比较高，但跟 angular2 配合会出现错行，所以还是 source-map 吧

  devServer: {
    inline:             true,  // 自动刷新机制分 iframe 和 inline 两种模式，在 webpack2 中这是默认值
    hot:               false,  // 启用热替换 -- 可以在不刷新页面的情况下动态加载修改的 javascript 代码
    historyApiFallback: true,  // 支持直接输入子地址，在原本出现 404 错误的地方返回 index.html
    stats:         'minimal',  // 显示统计信息，没有这个配置的话，默认会输出很多页的 chunk 信息
  },

  watchOptions: {
    aggregateTimeout: 1500 // 加长延时避免 webpack 连续打包 2次
  },

  resolve: { extensions: ['.js', '.ts'] },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader?keepUrl=true'],
      },
      {
        test: /\.html$/,
        loader: "html-loader?minimize=false",
      },
      {
        test: /\.css$/,
        loader: ['exports-loader?module.exports.toString()', 'css-loader'],
        include: path.resolve(__dirname, "app"),
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        exclude: path.resolve(__dirname, 'app'),
      },
      {
        test: /\.(png|jpg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'url-loader?limit=25000',
      },
    ]
  },


  plugins: [
    new webpack.ProvidePlugin({ 'THREE': 'three' }),
    new webpack.optimize.CommonsChunkPlugin({ name: ['app', 'vendor'] }),  // 实现去除重复依赖
    new webpack.LoaderOptionsPlugin({ debug: true }),
    new webpack.ContextReplacementPlugin(                                  // 去除 angular 警告
        /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/, __dirname),
  ]
};
