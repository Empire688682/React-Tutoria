import React, {useRef} from 'react'
import '../Component/Myapp.css';
import Button from './button'

function Myapp() {

  const buttonRef = useRef(null)

  return ( 
    <div className='container'>
      <button onClick={() =>{buttonRef.current.alterToggle()}}>From parent</button>
      <Button ref={buttonRef}/>
    </div>
  )
}

export default Myapp
