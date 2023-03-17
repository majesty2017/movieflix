import { useRef, useState } from 'react'
import './SignupScreen.css'
import { addUser, auth } from '../../firebaseStore'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const SignupScreen = () => {
  const name= useRef(null)
  const email = useRef(null)
  const password = useRef(null)

  const signUp = async (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then( async (data) => {
      console.log(data);
      await addUser({
        userId: data.user.uid,
        name: name,
        email: data.user.email
      })
    })
    .catch(err => {
      alert(err.message)
    })
  }
  

  const register = e => {
    e.preventDefault()
    signUp(name.current.value, email.current.value, password.current.value)
  }

  const login = e => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((user) => {
      console.log(user);
    })
    .catch(err => alert(err.message))
  }

  const [isRegister, setIsRegister] = useState(false)

  return (
    <div className='signupScreen'>
      <form>
        {!isRegister ? (
          <>
            <h1>Sign In</h1>
            <input type="email" ref={email} placeholder='Email Address' />
            <input type="password" ref={password} placeholder='Password' />
            <button onClick={login}>Sign in</button>

            <h4><span className='signupScreen__gray'>New to Movieflix?</span> 
            <span className='signupScreen__link' onClick={() => setIsRegister(true)}> Sign Up Now.</span></h4>
          </>
        ) : (
          <>
          <h1>Sign Up</h1>
          <input type="text" ref={name} placeholder='Full Name' />
          <input type="email" ref={email} placeholder='Email Address' />
          <input type="password" ref={password} placeholder='Password' />
          <button onClick={register}>Sign Up</button>

          <h4><span className='signupScreen__gray'>Already have Movieflix account? </span>
          <span className='signupScreen__link' onClick={() => setIsRegister(false)}> Sign In.</span></h4>
          </>
        ) }
        
      </form>
    </div>
  )
}

export default SignupScreen