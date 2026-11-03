import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Contacts from "./Pages/Contacts"
import About from "./Pages/About"
import Nav from "./component/Nav"
import NotFound from "./Pages/NotFound"
import AdminLayout from "./Pages/Admin/AdminLayout"
import Settings from "./Pages/Admin/Settings"
import Users from "./Pages/Admin/Users"
import Class from "./Pages/Class"
import ListsAndKeys from "./component/ListsAndKeys"


function App() {
  return (
    <BrowserRouter>
    <Nav/>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />  
        <Route path="/class" element={<Class />} /> 
        <Route path='listsandkeys' element={<ListsAndKeys/>} />

        <Route path="/admin" element={<AdminLayout />} >
          <Route path="settings" element={<Settings/>} />
          <Route path="users" element={<Users/>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App