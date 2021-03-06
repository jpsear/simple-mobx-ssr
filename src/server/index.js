import express from 'express'
import favicon from 'serve-favicon'
import logger from 'morgan'
import bodyParser from 'body-parser'
import compression from 'compression'
import config from './config/server.config'
import path from 'path'
import { Server } from 'http';

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import { Provider } from 'mobx-react'
import Html from './Html'
import { createServerState } from '../state'
import createRoutes from '../routes'
import fetchData from './helpers/fetchData'
import actions from '../actions/actions'

const app = express()
const server = new Server(app);

app.disable('x-powered-by') // Disable useless headers

app.use(compression()) 
app.use(express.static(path.join(__dirname, '../assets')));
app.use(bodyParser.json({ limit: '2mb' }))
app.use(bodyParser.urlencoded({ limit: '2mb', extended: true }))
// app.use(favicon(config.http.favicon))
// app.use('/robots.txt', (req,res) => res.send(config.http.robots))
// app.use(logger('dev'))

app.use('/*', function(req, res, next) {
  // Create state to transfer
  const state = createServerState()
  
  // Set host variable to header's host
  state.app.host = req.headers.host

  // Prepare for routing
  let matchRoutes = {
    routes : createRoutes(),
    location: req.originalUrl
  }

  // Route
  match(matchRoutes, (error, redirectLocation, renderProps) => {
    if (error) return res.status(500).send(error.message)
    if (redirectLocation) return res.redirect(302, redirectLocation.pathname + redirectLocation.handleInput)
    if (!renderProps) return res.status(404).send('404 Not found')
    
    let statusCode = renderProps.routes[1].path !== '*' ? 200 : 404 // Check for "Not Found" page ( in this case we have path "*" ) and use code 404 if that's the case

    return fetchData(renderProps, state, actions).then(() => {
      const content = ReactDOMServer.renderToStaticMarkup(
        <Provider state={state} actions={actions}>
          <Html>
            <RouterContext {...renderProps} />
          </Html>
        </Provider>
      )
      return res.status(statusCode).send(`<!DOCTYPE html>\n ${content}`)
    })
    .catch(err => {
      res.status(400).send(`400: An error has occured: ${err}`)
    })
  })
})

server.listen(config.http.port, err => {
  if (err) return console.error(`👎  ${err}`)
  console.info(`👍  Server launched at: localhost:${config.http.port}`)
})
