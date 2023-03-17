import { useSelector } from 'react-redux'
import { Navbar } from '../../components'
import { NetflixAvatar } from '../../images'
import './ProfileScreen.css'
import { selectUser } from '../../features/userSlice'
import { auth } from '../../firebaseStore';
import { PlanScreen } from '../'

const ProfileScreen = () => {
    const user = useSelector(selectUser);
    
  return (
    <div className='profileScreen'>
        <Navbar />
        <div className="profileScreen__body">
            <h1>Update Profile</h1>
            <div className="profileScreen__info">
                <img src={NetflixAvatar} alt="avatar" />
                <div className="profileScreen__details">
                    <h2>{user.email}</h2>
                    <div className="profileScreen__plans">
                        <h3>Plans</h3>
                        <PlanScreen />
                        <button onClick={() => auth.signOut()} className='profileScreen__signOut'>Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen