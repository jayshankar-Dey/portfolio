import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Education from "./components/Education/Education"
import Resume from "./components/Resume/Resume"
import Contact from "./components/Contact/Contact"
//import Layout from "./components/Layout"

const App = () => {
  return (
    <>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/education" element={<Education/>}/>
  <Route path="/Resume" element={<Resume/>}/>
  <Route path="/Contact" element={<Contact/>}/>
</Routes>
</BrowserRouter>
    </>
  )
}

export default App