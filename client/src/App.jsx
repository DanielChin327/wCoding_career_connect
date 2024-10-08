import Register from "./components/auth/Register.jsx";
import Login from "./components/auth/Login.jsx";
import Logout from "./components/auth/Logout.jsx";
import UserToken from "./components/Token/UserToken.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./pages/NavBar.jsx";

function App() {
  const {token,  removeToken, setToken } = UserToken();
  return (
    <>
    <BrowserRouter>
    <NavBar></NavBar>
     <Routes>
      <Route path="/login" element={<Login setToken={setToken} />}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="/logout" element={<Logout></Logout>}></Route>
      <Route></Route>
     </Routes>
    
    </BrowserRouter>

    </>
  )
}

export default App