const log = (method, url) => {
    console.log(`[${new Date().toLocaleString()}] ${method} request to ${url}`);
  };
  
  module.exports = log;
  