import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'

const button = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(false);

    useImperativeHandle(ref, () =>({
            alterToggle() {
                setToggle(!toggle)
            },
    }));

    const doSomething = () =>{
        setToggle(!toggle);
    }
  return (
    <div>
      <button onClick={doSomething}>From child</button>
      {toggle && <h1>Toggle</h1>}
    </div> 
  )
})

export default button
