import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";

function Routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={Home} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default Routes;
