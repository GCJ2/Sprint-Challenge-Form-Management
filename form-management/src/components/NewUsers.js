import React from 'react'



const NewUsers = (props) => {

  console.log('new users props', props);
  return(
    <div>
      <p>{props.name}</p>
    </div>
    )
  }
export default NewUsers
