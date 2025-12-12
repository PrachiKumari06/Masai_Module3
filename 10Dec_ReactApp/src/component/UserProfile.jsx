import React from 'react'
import UserInfo from './UserInfo.jsx'

export default function UserProfile(props) {
  return (
    <div>
      <UserInfo username={props.username} userage={props.userage} />
    </div>
  )
}
