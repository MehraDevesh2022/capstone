import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { lazy , Suspense } from "react"
import Loader from "./component/Loader"


const Home = lazy(() => import("./component/Home"))
const Cart = lazy(() => import("./component/Cart"))
const Search = lazy(() => import("./component/Search"))




function App() {

  return (
    <>
      <Router>
        <div >
          <center>
            Header
          </center>

        </div>
       <Suspense fallback ={<Loader/>} >
       <Routes>
             <Route path="/" element= {<Home/>}/>
            <Route path="cart" element= {<Cart/>} />
            <Route path="search" element= {<Search/>} />

        </Routes>
       </Suspense>
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
