import React from "react";
import Navigation from "./components/nav";
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import PageRenderer from './page_renderer';
import Home from "./pages/home";

function App() {
  const user ={
    firstName:'Asratl',
    lastName:'Enkhee'
  }
  return (
    <Router>
      <div className="App">
        <Navigation user={user}/>
        <Routes>
          <Route path="/:page" element={<PageRenderer />} />
          <Route path="/" component={Home} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

function NotFound() {
  return <h1>404 - Not Found</h1>;
}

export default App;
