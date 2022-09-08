import React from 'react'
import User from "../models/contact"
import {UserConect} from './UserLine'

const UserComponent = () => {

    const newContact = new User("Sandra", "Espinoza", "sandra@gmail.com", false)
  return (
    <div>
        <h1> Contact </h1>
        <UserConect contact={newContact}/>
    </div>
  )
}

export default UserComponent;