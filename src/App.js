import Topbar from "./Components/Topbar/Topbar";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home.jsx"
import Single from "./Pages/Single/Single.jsx";
import Write from "./Pages/Write/Write";
import Setting from "./Pages/Setting/Setting.jsx";
import Register from "./Pages/Register/Register"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useContext } from "react";
import Context from "./context/Context";
import Contact from "./Pages/Contact/Contact";

function App() {
  const {user}= useContext(Context);
  return (
  
      <BrowserRouter>
          <Topbar />    
        <Routes>
          <Route path="/"  element={<Home/>}></Route> 
          <Route path="/register" element={user ? <Home/> : <Register/>}></Route>
          <Route path="/login" element={user ? <Home/> : <Login/>}></Route>
          <Route path="/write" element={user ? <Write/> : <Register/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/setting" element={user ? <Setting/> : <Register/>}></Route>
          <Route path="/post/:postId" element={<Single/>}></Route> 
        </Routes>
      </BrowserRouter>
 
  );
}

export default App;
