import React from "react";
import HomePage from "./pages/home/HomePage";
import { Route,Routes  } from "react-router-dom"
import ArticleDetail from "./pages/articalDetail/ArticleDetail";
function App() {
  return (
    <div className="app font-opensans">
    <Routes>
      <Route path="/" index element = {<HomePage/>}/>
      <Route path="/blog/:id"  element={<ArticleDetail/>}/>
    </Routes>
      
    </div>
  );
}

export default App;
