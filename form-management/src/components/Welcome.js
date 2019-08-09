import React from 'react'
import UserForm from "./UserForm"
import CurrentUsersDisplay from "./CurrentUsersDisplay"
import { Link } from "react-router-dom";


const Welcome = (props) => {
return(
  <div>
    <Link to= "/newuser">
      <h2>Get Started</h2>
    </Link>
  </div>
  )
}
export default Welcome
