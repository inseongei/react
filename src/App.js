import React from "react";
import { Route } from "react-router-dom";
import Score from "./Score";
import Review from "./Review";


function App() {
  
  return (
    <div className="App">
      <Route path="/" exact>
        <Score />
      </Route>
      <Route path="/review/:week" exact>
        <Review />
      </Route>
    </div>
  );
}

export default App;
