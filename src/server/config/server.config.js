const path = require('path')

// Main server/app configuration
module.exports = {
  http: {
    port: 5400,
    favicon: path.join(__dirname,'..', 'src/assets/favicon.ico'),
    robots: 'User-agent: *\nDisallow:',
    static: [
      {
        url:'/public', path : path.join(__dirname,'../..', 'public/')
      }
    ]
  },
  // db: {
  //   mongo: 'mongodb://localhost/test'
  // }
}
