import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Transaction from "./pages/Transaction";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./conteks";
import ProtectRoute from "./ProtectRoute";
import ChatAI from "../src/pages/ChatAI";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route
            path="/dashboar"
            element={
              <ProtectRoute>
                <Dashboard />
              </ProtectRoute>
            }
          /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/chatai" element={<ChatAI />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
