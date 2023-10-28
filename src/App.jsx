import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Transaction from "./pages/Transaction";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AuthContext, AuthProvider } from "./conteks";
import PrivateRoute from "./privateRoute";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transaction" element={<Transaction />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
