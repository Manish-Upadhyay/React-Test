const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const Dotenv = require('dotenv-webpack');

const deps = require('./package.json').dependencies;
module.exports = (env, argv) => {
  require('dotenv').config({ path: `./.env.${env.TARGET_ENV || argv.mode}` });
  return {
    output: {
      publicPath: process.env.PUBLIC_PATH,
    },

    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    },

    devServer: {
      port: 3000,
      historyApiFallback: true,
    },

    module: {
      rules: [
        {
          test: /\.m?js/,
          type: 'javascript/auto',
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.(css|s[ac]ss)$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },

    plugins: [
      new Dotenv({
        path: `./.env.${env.TARGET_ENV}`,
      }),
      // new ModuleFederationPlugin({
      //   name: 'naehasuiworkflows',
      //   filename: 'remoteEntry.js',
      //   remotes: {
      //     naehascomponents: process.env.NAEHAS_COMPONENTS,
      //     naehascore: process.env.NAEHAS_CORE,
      //   },
      //   exposes: {
      //     './WorkflowService': './src/@shared/WorkflowService',
      //   },
      //   shared: {
      //     ...deps,
      //     react: {
      //       singleton: true,
      //       requiredVersion: '>=16.8',
      //     },
      //     'react-dom': {
      //       singleton: true,
      //       requiredVersion: '>=16.8',
      //     },
      //     'react-router-dom': {
      //       singleton: true,
      //       requiredVersion: '>=6.2',
      //     },
      //     'react-redux': {
      //       singleton: true,
      //       requiredVersion: '>=7',
      //     },
      //   },
      // }),
      new HtmlWebPackPlugin({
        template: './public/index.html',
        hash: true
      }),
    ],
  };
};
