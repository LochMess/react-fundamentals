// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  const inputRef = React.useRef()
  
  // For extra credit 2 not used in 3 
  // const [error, setError] = React.useState(null)
  // const handleChange = ({target}) => {
  //   const value = target.value
  //   const isValid = value === value.toLowerCase()
  //   setError(isValid ? null : 'Username input must be lower case')
  // }

  // Extra credit 3
  const [username, setUsername] = React.useState('')
  const handleChange =(event) => {
    const {value} = event.target
    setUsername(value.toLowerCase())
  }

  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(event.target.elements.usernameInput.value)
    onSubmitUsername(inputRef.current.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          id="usernameInput"
          ref={inputRef}
          onChange={handleChange}
          value={username}
          type="text"
        />
      </div>
      <button type="submit">
      {/* <button disabled={Boolean(error)} type="submit"> */}
        Submit
      </button>
      {/* <div role="alert" hidden={error === null}>{error}</div> */}
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
