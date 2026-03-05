import React from 'react'
import { Link } from 'react-router-dom'

function Profile() {
  return (
    <div>Profile
        <p><Link to="/address">Address</Link></p>
    </div>
  )
}

export default Profile