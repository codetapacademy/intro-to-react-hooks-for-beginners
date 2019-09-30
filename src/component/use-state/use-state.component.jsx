import React, { useState } from 'react'

const UseStateComponent = () => {
  const [lightStatus, toggleLights] = useState(false)
  const [theValue, changeTheVaue] = useState('this is me, the nice input')
  const [donation, donate] = useState(0)

  const handleTheChange = se => {
    console.log(se.target.value)
    changeTheVaue(se.target.value)
  }

  return (
    <div>
      <p>The lights are: {lightStatus ? 'on' : 'off'}</p>
      <button onClick={() => toggleLights(!lightStatus)}>Change state</button>
      <p>Play with a nice input</p>
      <input value={theValue} onChange={handleTheChange} type="text"/>
      <p>Donation value so far: {donation}</p>
      <button onClick={() => donate(donation + 1)}>Donate £1</button>
    </div>
  )
}

export default UseStateComponent
