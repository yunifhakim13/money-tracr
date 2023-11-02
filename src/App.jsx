import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Transaction from "./pages/Transaction";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ChatAI from "../src/pages/ChatAI";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              {<Dashboard />}
              {<Transaction />}
            </ProtectedRoute>
          }
        /> */}
        <Route path="/chatai" element={<ChatAI />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transaction" element={<Transaction />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
