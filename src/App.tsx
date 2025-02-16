import { BrowserRouter as Router } from "react-router";
import RouteSetting from "./routes/RouteSetting";
import Header from "./components/Header";
function App() {

  return (
    <div style={{ width: "100vw", minHeight: "100vh" }}>
      <Router>
        <Header />
        <RouteSetting />
      </Router>
    </div>
  );
}

export default App
