module.exports = {
  resolve: {
    // .js is required for react imports.
    // .tsx is for our app entry point.
    // .ts is optional, in case you will be importing any regular ts files.
    extensions: ['', '.js', '.ts', '.tsx']
  },
  module: {
      preLoaders: [
            {
                test: /\.tsx?$/,
                loader: "tslint"
            }
        ],
    loaders: [{
      // Set up ts-loader for .ts/.tsx files and exclude any imports from node_modules.
      test: /\.tsx?$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  entry: {
    // Set index.tsx as application entry point.
    app: './src/index.tsx'
  }
};
