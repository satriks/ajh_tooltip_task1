const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('../../../webpack.config')

const server = new WebpackDevServer(webpack(config), {})
server.listen(9000, 'localhost', (err) => {
  if (err) {
    return
  }
  if (process.send) {
    console.log('ping')
    process.send('ok')
  }
})
