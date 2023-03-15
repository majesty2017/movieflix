import { useState } from 'react'
import { TransparentLogo } from '../../images'
import './LoginScreen.css'
import { SignupScreen} from '../'

const Login = () => {
    const [signIn, setSignIn] = useState(false)
  return (
    <div className='loginScreen'>
        <div className="loginScreen__background">
            <img src={TransparentLogo} alt="logo" className='loginScreen__logo' />
            <button className='loginScreen__btn' onClick={() => setSignIn(true)}>Sign in</button>
            <div className='loginScreen__gradient' />
        </div>
        
        <div className="loginScreen__body">
            {signIn ? (
                <SignupScreen />
            ) :  (
                <>
                <h1>Unlimited films, TV Programmes and More</h1>
                <h2>Watch anywhere. Cancel at any time.</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership</h3>

                <div className="loginScreen_input">
                    <form>
                        <input type="email" placeholder='Email Address' />
                        <button className='loginScreen__getStarted' onClick={() => setSignIn(true)}>Get Started</button>
                    </form>
                </div>
            </>
            )}
            
        </div>
    </div>
  )
}

export default Login