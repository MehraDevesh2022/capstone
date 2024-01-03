import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React ,{lazy} from "react"


 const Home  = lazy(() => import("./component/Home"))
 const Cart = lazy(() =>import("./component/Cart"))
 const Search  = lazy(() => import("./component/Search"))




function App() {

  return (
    <>
      <Router>
        <div >
          <center>
            Header
          </center>

        </div>
        <Routes>
          <Route path="/" element={<Home/>}>
            <Route path="/cart" element ={}

          </Route>
        </Routes>
        <div>
          <center>
            footer
          </center>
        </div>
      </Router>
    </>
  )
}

export default App
