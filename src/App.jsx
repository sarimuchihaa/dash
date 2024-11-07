import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProjectProvider } from "./Components/ProjectContext/ProjectContext.jsx";
import Layout from "./Components/Layout/Layout.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import Activity from "./Components/Activity/Activity.jsx";
import MyTasks from "./Components/MyTasks/MyTasks.jsx";
import NewProject from "./Pages/NewProject.jsx";


// APP
function App() {
  return (
    <>
    <ProjectProvider>
    <Router>
      <Layout>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Projects />
              <Activity />
              <MyTasks />

            </>
          } />
          <Route path="/new-project" element={<NewProject />}/>
        </Routes>
      </Layout>
    </Router>
    </ProjectProvider>
    </>
  );
}

export default App;
