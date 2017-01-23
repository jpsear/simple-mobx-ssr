import React from 'react'
import { Route } from 'react-router'
import Root from '@components/Root/Root'
import { HomePage, AnotherPage } from '@pages'

export default function createRoutes() {
  return (
    <Route component={Root}>
      <Route path="/" component={HomePage}/>
      <Route path="about" component={AnotherPage} />
    </Route>
  )
}
