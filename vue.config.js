module.exports = {
  configureWebpack: {
    entry: './client/src/main.js',  // Adjust this path if your main.js is elsewhere
  },
  devServer: {
    allowedHosts: "all",  // Fixes "Invalid Host Header" issue
    https: true,  // Enable HTTPS for the dev server
    client: {
      webSocketURL: 'wss://0.0.0.0:8080/ws',  // Force WebSocket to use WSS
    },
  },
};
