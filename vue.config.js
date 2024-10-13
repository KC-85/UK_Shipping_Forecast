module.exports = {
  configureWebpack: {
    entry: './client/src/main.js'  // Adjust this path if your main.js is elsewhere
  },
  devServer: {
    allowedHosts: "all",  // This fixes the "Invalid Host Header" issue
  }
};
