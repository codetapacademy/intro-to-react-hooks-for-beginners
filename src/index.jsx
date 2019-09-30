import React from 'react'
import { render } from 'react-dom'
import ReactHooksIntro from './component/app/app.component'

const thePlaceWhereReactWillRender = document.querySelector('#react-will-render-here')

render(
  <ReactHooksIntro />,
  thePlaceWhereReactWillRender
)

// I want to select that div and instruct react dom to place the react app inside it
