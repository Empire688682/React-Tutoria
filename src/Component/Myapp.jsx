import React, { useState} from 'react'
import '../Component/Myapp.css';

function Myapp() {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(null);

  const doSomething = () =>{
    setCount(count + 1);
    if (count === 10){
      setCount(0);
    }
    if(count % 2 === 1){
      setShowText(`ShowText ${count+1}`)
    }
    else{
      setShowText(null)
    }
  }
  return ( 
    <div className='container'>
    <h1>{count}</h1>
    <button onClick={doSomething}>Increment</button>
    <div>
    {showText}
    </div>
    </div>
  )
}

export default Myapp
