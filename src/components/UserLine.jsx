import React from 'react'
import PropTypes from 'prop-types'
import { User } from '../models/contact'

 export const UserConect = ({contact}) => {
  return (
    <div>
        <h2> Name : {contact.name}</h2>
        <h2> last Name : {contact.lastName}</h2>
        <h2> email : {contact.email}</h2>
        {
            contact.conect ? "connected user" : "user not connected"
        }
    </div>
  )
}

UserConect.propTypes = {
    props: PropTypes.instanceOf(User) 
}

