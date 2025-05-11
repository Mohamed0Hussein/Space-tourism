import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./Pages/Home"
import Landing from './Pages/Landing'
import { ROUTE_PATHS } from "./utils/routePaths";
import Destination from "./Pages/Destination";

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path={ROUTE_PATHS.HOME} element={<Home/>}>
            <Route index element={<Landing/>}></Route>
            <Route path={ROUTE_PATHS.DESTINATION} element={<Destination/>}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
