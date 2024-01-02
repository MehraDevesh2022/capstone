import { BrowserRouter as Router, Routes, Route } from "react-router-dom"



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
          <Route path="/" element={<><div><center>this is first component</center></div></>}>

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
