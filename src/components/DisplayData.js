import React from 'react'

function DisplayData({firstName, lastName}) {
  return (
    <div>
        <h1>My name is: {firstName} {lastName}</h1>
    </div>
  )
}

export default DisplayData