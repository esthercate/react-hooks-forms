import React, { useState } from 'react';
import Form from './Form';
import DisplayData from './DisplayData';

function App() {
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Henry");

  function handleFirstName(e) {
    console.log(e.target.value)
    setFirstName(e.target.value);
  }

  function handleLastName(e) {
    console.log(e.target.value)
    setLastName(e.target.value);
  }

  return (
  <div>
    <Form 
       firstName={firstName}
       lastName={lastName}
       handleFirstName={handleFirstName}
       handleLastName={handleLastName}
   />
   <DisplayData firstName={firstName} lastName={lastName} />
  </div>
  )
}

export default App