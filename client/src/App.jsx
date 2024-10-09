import './App.css'
import JobPosting from './components/JobPosting/JobPosting'
import JobViewer from './components/JobViewer/JobViewer';


import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/shared/NavBar";
import Landing from "./pages/Landing.jsx";
// import Register from "./components/Register";
// import Login from "./components/Login";
import AboutUs from "./pages/AboutUs.jsx";
// import SwipeJobs from "./components/JobseekerDecide";
import SearchAndFilterSystem from "./components/SearchBar/SearchBar.jsx"

function App() {
  return (
    <>

      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/home" element={<Landing />}></Route>
          {/* <Route path="/register" element={<Register />}></Route> */}
          {/* <Route path="/login" element={<Login />}></Route> */}
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/searchbar" element={<SearchAndFilterSystem />}></Route>
          <Route path="/jobposting" element={<JobPosting />}></Route>
          <Route path="/jobviewer" element={<JobViewer />}></Route>
          {/* <Route path="/filter" element={<Filter />}></Route> */}
          
          
          {/* <Route path="/swipe" element={<SwipeJobs />}></Route> */}
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
