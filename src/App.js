import './App.css';
import { Routes, Route } from "react-router-dom";

import Login from "./pages/auth/Login"

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
