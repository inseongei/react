import "./App.css"
import { useHistory,Route} from "react-router-dom";
import Card from "./Card"
import CardDetail from "./CardDetail";
import React from "react";
// import { db } from "./firebase";
// import { collection,getDocs,addDoc } from "firebase/firestore";
import { useDispatch} from "react-redux"
import {loadCardFB} from "./redux/modules/Reducer"




function App() {
  const history = useHistory();
  const dispatch = useDispatch();

  
  React.useEffect(()=>{
    dispatch(loadCardFB());
  })
   

  

  return (
    <>
    <Route path="/" exact>
      <div className="nav">
      <h1> English dictionary<button className="Btn" onClick={()=>{history.push('/CardDetail')}}>+</button></h1> 
      </div>
    <div className="Container">
    <Card/>
    </div>
    </Route>
    <Route path="/CardDetail" exact>
      <CardDetail/>
    </Route>
    
   </>
  );
}

export default App;
