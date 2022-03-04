import React, { useEffect } from 'react'
import userLogInToLogged from '../../utils/logged'

const Home = ({history,location}) => {
useEffect(() => {
  userLogInToLogged(history, location)

}, [])

  
  return (
    <div className='text-center'>
      <h1>Home</h1>
<div  className='text-center'>
  <img style={{height:"80vh", width:"auto"}} src='https://25yearslatersite.com/wp-content/uploads/2020/05/the-critic-7.jpg'/>
</div>
    </div>
  )
}

export default Home