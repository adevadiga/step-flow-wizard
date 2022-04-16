// "dev": "webpack --watch --mode=development",
// "build": "export NODE_ENV=production; webpack --progress --optimize-minimize --mode=production",
const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
//const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const args = require('minimist')(process.argv);
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const app = require('./package.json');

const isProd = process.env.NODE_ENV === 'production';

const config = {
    entry: './src/index.ts',
    output: {
       // path: path.resolve('dist'),
        filename: path.basename(app.main),
        libraryTarget: 'umd',
        umdNamedDefine: true,
        globalObject: 'this',
    },
    module: {
        rules: [
          {
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: [
                  "@babel/preset-env",
                  "@babel/preset-react",
                  "@babel/preset-typescript",
                ],
              },
            },
          },
        ],
    },
    /** Don't bundle common dependencies */
    externals: [
        'prop-types',
        'react-dom',
        'react',
    ],
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    output: {
                        comments: false
                    }
                },
                extractComments: false
            }),
            //new OptimizeCSSAssetsPlugin({}),
        ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [],
    stats: {
        builtAt: false,
        hash: false,
        modules: false,
        version: false,
        warnings: false,
    },
};

if (isProd) {
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        }),
    );
}

// Analyze bundle with --analyze flag
if (args.analyze) config.plugins.push(new BundleAnalyzerPlugin());

module.exports = config;