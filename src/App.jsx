import { BrowserRouter as Router } from "react-router-dom";
import { ProjectProvider } from "./Components/ProjectContext/ProjectContext.jsx";
import Layout from "./Components/Layout/Layout.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { Dashboard } from "./Pages/Dashboard/Dashboard.jsx";


function App() {
  return (
    <ProjectProvider>
      <Router>
        <Layout>
          <Navbar />
          <Dashboard />
        </Layout>
      </Router>
    </ProjectProvider>
  );
}

export default App;