import { useState } from "react";
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import { LoginPage } from "./components/Auth/Login/LoginPage";
import { RegistrationPage } from "./components/Auth/Registration/RegistrationPage";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to='/users' /> : <Navigate to="registration" />} />
        {/* <Route path="/registration" element={isLoggedIn ? <Navigate to='/costs' /> : <AuthPage type={"registration"} />} /> */}
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/Login" element={<LoginPage />} />
        {/* <Route path="/costs" element={isLoggedIn ? <CostsPage /> : <Navigate to='/login' />} />  */}
      </Routes>
    </Router>
  )
}

export default App
