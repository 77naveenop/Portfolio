import React from "react";
import { useDispatch, useSelector } from "react-redux";
import './App.css';
import { incNum , decNum} from "./actions/Index";



function App() {

  const myState = useSelector((state)=>state.changeTheNum);
  const dispatch = useDispatch();
  return (
    <>
      <div className="main-div">


        <div className="container">

          <h1>Increment/Decrement counter</h1>
          <h4>using React and Redux</h4>

          <div className="quantity">
            <a className="quantity__minus" title="Decrement" onClick={()=>dispatch(decNum())}><span>-</span></a>
            <input name="quantity" type="text" className="quantity__input" value={myState} />
            <a className="quantity__plus" title="Increment" onClick={()=>dispatch(incNum())}
            ><span>+</span></a>
          </div>

        </div>
      </div>
    </>

  )
}

export default App;
