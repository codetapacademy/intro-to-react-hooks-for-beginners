import React, { useEffect, useState } from 'react'
import { list } from 'postcss'

const UseEffectComponent = () => {
  const [people, updatePeople] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3456/people`)
      .then(result => result.json())
      .then(result => updatePeople(result))
      .catch(error => console.log(error))
  }, [])
  console.log(people)
  return (
    <div>
      <h1>Use Effect</h1>
      <h2>List of people</h2>
      <ul>
        {people.map(({ name, age }) => <li key={name}>{name} - {age}</li>)}
      </ul>
    </div>
  )
}

export default UseEffectComponent
