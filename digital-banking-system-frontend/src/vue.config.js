const path = require('path');

module.exports = {
  // Base public path
  publicPath: '/',

  // Output directory for production build
  outputDir: path.resolve(__dirname, 'dist'),

  // Enable linting on save
  lintOnSave: true,

  // Configure webpack to allow cross-origin requests (backend proxying)
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',  // Backend API base URL
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/blockchain': {
        target: 'http://localhost:5000/blockchain',  // Blockchain API endpoint
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/blockchain': ''
        }
      },
      '/auth': {
        target: 'http://localhost:5000/auth',  // Authentication API endpoint
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/auth': ''
        }
      }
    },
    // Open the browser automatically after the server starts
    open: true,
    // Port for running Vue development server
    port: 8080
  },

  // Webpack configuration to include additional optimizations or settings
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),  // Alias to easily reference src folder
        '@assets': path.resolve(__dirname, 'src/assets'),  // Alias for assets
      },
    },
  },

  // Enable source maps for production build
  productionSourceMap: true,

  // Customize progress bar during build
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'Digital Banking System';  // Set browser tab title
      return args;
    });
  },
};

