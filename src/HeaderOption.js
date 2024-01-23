import React from 'react'
import './HeaderOption.css'
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';



function HeaderOption({avatar, Icon, title, onClick}) {

  const user = useSelector(selectUser);

  console.log('User:', user);


  return (
    <div onClick={onClick} className='headerOption'>
      {Icon && <Icon className='headerOption_icon'></Icon>}
      {/* {avatar && <Avatar className='headerOption_icon' src={avatar} />}
      <h3 className='headerOption_title'>{title}</h3> */}
      
      {avatar && user?.email ? ( <Avatar className='headerOption_icon'>{user.email[0]}</Avatar>
       ) : null}

      <h3 className='headerOption_title'>{title}</h3>
    </div>
  )
}

export default HeaderOption
