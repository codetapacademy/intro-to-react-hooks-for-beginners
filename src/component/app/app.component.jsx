import React from 'react'
import Nav from '../nav'
import { Router } from '@reach/router'
import Home from '../home'
import UseStateComponent from '../use-state/use-state.component'
import UseEffectComponent from '../use-effect/use-effect.component'

const ReactHooksIntro = () => {
  return (
    <div>
      <h1>This is it! This is React Hooks!!! Nice!</h1>
      <Nav />
      <Router>
        <Home path="/" />
        <UseStateComponent path="/use-state" />
        <UseEffectComponent path="/use-effect" />
      </Router>
    </div>
  )
}

export default ReactHooksIntro
