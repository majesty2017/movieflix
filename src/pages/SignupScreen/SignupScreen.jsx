import './SignupScreen.css'

const SignupScreen = () => {
  const register = e => {
    e.preventDefault()
    alert('Hello')
    return
  }

  const login = e => {
    e.preventDefault()
    alert('Hello')
    return
  }

  return (
    <div className='signupScreen'>
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder='Email Address' />
        <input type="password" placeholder='Password' />
        <button onClick={register}>Sign in</button>

        <h4><span className='signupScreen__gray'>New to Movieflix?</span>
        <span className='signupScreen__link' onClick={register}>Sign Up Now.</span></h4>
      </form>
    </div>
  )
}

export default SignupScreen