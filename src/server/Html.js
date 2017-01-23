//--------------------------------
// This is rendered ONLY on SERVER
//--------------------------------
import React from 'react'
import { inject } from 'mobx-react'

if (process.env.IS_CLIENT === true) throw "React Component <Html/> shouldn't be included in the client"

@inject("state")
export default class Html extends React.Component {
    render() {
      const state = this.props.state

      // Setup devServerURL accordingly ( webpack dev server has a different port )
      const isProd = process.env.NODE_ENV === 'production'
      // const devServerURL = isProd ? '/public' : 'http://'+state.app.host.replace(5400, 8080)

      const devServerURL = `http://${state.app.host}`
      
      // Setup metadata
      let metadata = {
        title: state.app.title,
        description: state.app.description,
        keywords: ""
      }

      // Inject state ( used for mobx-connect )
      let injected_state = 'window.__STATE = ' + JSON.stringify(state, null, isProd ? 0 : 4) + ';'

      /* eslint-disable react/no-danger */
      return (
        <html>
          <head>
            <title>SSR</title>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="/styles.css" />
          </head>
          <body>
            ARSE
          </body>
        </html>
      )
    }
}
