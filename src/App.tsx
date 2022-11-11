import { useState } from "react";
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import { LoginPage } from "./components/Auth/Login/LoginPage";
import { RegistrationPage } from "./components/Auth/Registration/RegistrationPage";
import { UsersPage } from "./components/Users/UsersPage";
import { usersContext } from "./Context/usersContext";
import useToken from "./hooks/useToken";
import { useUsersData } from "./hooks/useUsersData";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to='/users' /> : <Navigate to="registration" />} />
        {/* <Route path="/registration" element={isLoggedIn ? <Navigate to='/costs' /> : <AuthPage type={"registration"} />} /> */}
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/users" element={<UsersPage />} />
        {/* <Route path="/costs" element={isLoggedIn ? <CostsPage /> : <Navigate to='/login' />} />  */}
      </Routes>
    </Router>
  )
}

export default App
