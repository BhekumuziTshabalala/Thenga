import React from "react";
import  ReactDOM  from "react-dom";
import Landing from "./landing";

const App = () => {
   return (
      <main>
         <Landing/>
      </main>
   )
}

ReactDOM.render(App(),
    document.getElementById("root"));
