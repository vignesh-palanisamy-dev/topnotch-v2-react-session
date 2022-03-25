import React from "react";

// function useState (value){
//     return [value , ()=>{}]
//    }

// var [state, setState] = useState(500)
//     -> var [state, setState] = [500 , ()=>{}];
// state : 500
// value  : ()=>{}

function Counter() {
  const [state, setState] = React.useState(0);

  const handleIncrement = () => {
    setState(state + 1);
  };

  const handleDecrement = () => {
    setState(state - 1);
  };

  return (
    <div>
      <button onClick={handleIncrement}>+1</button>
      <br></br>
      <button onClick={handleDecrement}>-1</button>
      <br></br>
      <h3>React state variable : {state}</h3>
    </div>
  );
}

// Function is called as component in react
// component re-render means -> calling the function again
// When ever state changes component will rerender

export default Counter;
