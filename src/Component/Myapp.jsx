import React, { useReducer} from 'react'
import '../Component/Myapp.css';

function Myapp() {

  const reducer = (state, action) =>{
    switch (action.type) {
      case "INCREMENT":
        return{count: state.count + 1, showText: state.showText}
      case "toggleShowText":
        return{count: state.count, showText: !state.showText}
      default:
       return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, {count: 0, showText:true });

  const doSomething = () =>{
    dispatch({type: "INCREMENT"});
    if(state.count %2===1){
      dispatch({type: "toggleShowText"});
    }else{
      !dispatch({type: "toggleShowText"});
    }
    if(state.count === 10){
      state.count = 0;
    }

  }
  return ( 
    <div className='container'>
    <h1>{state.count}</h1>
    <button onClick={doSomething}>Increment</button>
    <div>
    {state.showText && "ShowText"}
    </div>
    </div>
  )
}

export default Myapp
