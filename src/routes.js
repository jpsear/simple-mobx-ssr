import React from 'react'
import { Route } from 'react-router'
import Root from '@components/Root/Root'
import HomePage from './pages/HomePage/HomePage'
import AnotherPage from './pages/AnotherPage/AnotherPage'

export default function createRoutes() {
  return (
    <Route component={Root}>
      <Route path="/" component={HomePage}/>
      <Route path="about" component={AnotherPage} />
    </Route>
  )
}
