import React from 'react'



const CurrentUsers = (props) => {

  console.log('current users props', props);
  return(
    <div>
      <p>{props.name}</p>
    </div>
    )
  }
export default CurrentUsers
