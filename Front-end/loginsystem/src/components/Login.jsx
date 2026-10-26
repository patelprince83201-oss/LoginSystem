
import React, { useState } from 'react'
const Login = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

                                     //backend ne request path api/register ma jase and ema data send thase
    try{
      const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password
        })
      });
    } catch (error) {
      console.error('Error:', error);
    }

    
    console.log('Username:', username)
    console.log('Email:', email)
    console.log('Password:', password)

    setUsername('');
    setEmail('');
    setPassword('');

  }
  return (
    <div>
    <div className="login-container">
      <div className="loginheader">
        <h1>Welcome to the Login Page!</h1> 

         <div className="loginform">
            <form  className="formhending" onSubmit={handleSubmit}>

       <input
        type="text" 
        placeholder="Username" 
        value={username}
        onChange={(e)=>{
            setUsername(e.target.value)
        }}
        />

       <input
        type="email" 
       placeholder=" Enter Email" 
       value={email}
       onChange={(e)=>{
        setEmail(e.target.value)
       }}
       />
            <input
             type="password"
              placeholder="Password"
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
               />

            <div className="login-button">
              <button type="submit">Login</button>
            </div>
            </form>

            </div>
      </div>





    </div>






    </div>
    
  )
}

export default Login
