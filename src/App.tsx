import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./Pages/Home"
import Landing from './Pages/Landing'
import { ROUTE_PATHS } from "./utils/routePaths";
import Destination from "./Pages/Destination";
import Technology from "./Pages/Technology";
import Crew from "./Pages/Crew";

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path={ROUTE_PATHS.HOME} element={<Home/>}>
            <Route index element={<Landing/>}></Route>
            <Route path={ROUTE_PATHS.DESTINATION} element={<Destination/>}></Route>
            <Route path={ROUTE_PATHS.CREW} element={<Crew/>}></Route>
            <Route path={ROUTE_PATHS.TECHNOLOGY} element={<Technology/>}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
