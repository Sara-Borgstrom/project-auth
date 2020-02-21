import React, {useState} from 'react'

const URL = 'http://localhost:8080/users'

export const SignUp = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signedUp, setSignedUp] = useState()

  const handleSubmit = (event) => {
    event.preventDefault()

    fetch(URL, {
      method: 'POST',
      body: JSON.stringify({name: name, email: email, password: password}),
      headers: {'Content-Type': 'application/json'}
    }).then(() => {
      setSignedUp('Thanks for signing up!')
      setName('')
      setEmail('')
      setPassword('')
    })
    .catch(err => console.log('error:', err))
    // TODO: Add when next
  }

  return(
    <>
    <form className='sign-up-container' onSubmit={handleSubmit}>
      <h2>Sign up</h2>
      <label>
        Name
        <input type='text' value={name} onChange={(event)=> {setName(event.target.value)}} />
      </label>
      <label>
        Email
        <input type='email' value={email} onChange={(event)=> {setEmail(event.target.value)}} />
      </label>
      <label>
        Password
        <input type='password' value={password} onChange={(event)=> {setPassword(event.target.value)}} />
      </label>
      <button type='submit' className='submit-button'>Submit</button>
    </form>
    <p>{signedUp}</p>
    </>
  )
}