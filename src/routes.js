import React from 'react'
import { Route } from 'react-router'
import Root from '@components/Root/Root'
import HomePage from './pages/HomePage/HomePage'
import AnotherPage from './pages/AnotherPage/AnotherPage'

/**
 * Asynchronously load a file
 * @param main {String} - Main component
 * @returns {Function}
 */
function requireAsync(entry) {
  return function(location, next) {
    next(null, require(`./pages/${entry}/${entry}.js`))
  }
}

/**
 * Routes are defined here. They are loaded asynchronously.
 * Paths are relative to the "components" directory.
 * @param {Object}
 * @returns {Object}
 */
export default function createRoutes() {
  return (
    <Route component={Root}>
      <Route path="/" component={HomePage}/>
      <Route path="about"  component={AnotherPage} />
      <Route path="browse" getComponent={requireAsync('Browse')} />
      <Route path="*"      getComponent={requireAsync('NotFound')} />
    </Route>
  )
}
