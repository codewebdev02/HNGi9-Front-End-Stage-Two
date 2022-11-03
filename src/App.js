import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App container">
    <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
