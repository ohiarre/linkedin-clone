import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './Header.css'
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
// import AvatarIcon from '@mui/icons-material/Avatar';
import { auth } from './firebase';
import { logout } from './features/userSlice';

function Header() {

  // const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  }

  return (
    <div className='header'>

      <div className='header_left'>

        <img src='https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png' alt=''/>

        <div className='header_search'>
            <SearchIcon />
            <input placeholder='Search' type='text' />
        </div>

        </div>


        <div className='header_right'>
            <HeaderOption Icon={HomeIcon} title="Home"/>
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
            <HeaderOption Icon={ChatIcon} title="Messaging"/>
            <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
            <HeaderOption avatar={true} title="me" onClick={logoutOfApp}/>

        
      </div>
    </div>
  )
}

export default Header
