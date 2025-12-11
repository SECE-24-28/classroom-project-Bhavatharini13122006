import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Contact from "./Contact";
import Users from "./Users";
import Books from "./Books";

function App() {
  return (
    <BrowserRouter>
      <h1>App page</h1>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
        <Link to="/user/1"><li>User1</li></Link>
        <Link to="/user/2"><li>User2</li></Link>
        <Link to="/Books"><li>User2</li></Link>
        <Link to="/Books/oldbook"><li>Old Book</li></Link>
        <Link to="/Books/newbook"><li>New Book</li></Link>
        <Link to="/invoices"><li>Invoices</li></Link>


      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:id" element={<Users/>}/>
        <Route path="/Books" element={<Books/>}/>
        <Route path="oldbook" element={<Books/>}/>
        <Route path="newbook" element={<Books/>}/>


      </Routes>
      <Route path="/invoices" element={<Invoices/}></Route>
    </BrowserRouter>
  );
}
export default App;
