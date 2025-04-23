import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Home } from "../Pages";
import { CreatePostPage } from "../Pages/CreatePostPage";
import Navbar from "../components/Navbar";
export function MyRoutes() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>        
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<CreatePostPage />} />        
      </Routes>
    </BrowserRouter>
  );
}