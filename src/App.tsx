import { BrowserRouter as Router } from "react-router";
import RouteSetting from "./routes/RouteSetting";
import 'react-loading-skeleton/dist/skeleton.css'
function App() {
  

  return (
    <div style={{ width: "100vw", minHeight: "100vh" }}>
      <Router>
        <RouteSetting />
      </Router>
    </div>
  );
}

export default App
