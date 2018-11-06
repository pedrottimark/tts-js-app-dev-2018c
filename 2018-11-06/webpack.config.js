module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(gif|png|svg)$/,
        use: [
          'url-loader'
        ]
      },
      {
        test: /\.jpg$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
        ],
      }
    ]
  }
};