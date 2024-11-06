import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import Activity from "./Components/Activity/Activity.jsx";
import Tasks from "./Components/Tasks/Tasks.jsx";
import Messages from "./Components/Messages/Messages.jsx";
import NewProject from "./Pages/NewProject.jsx";


// APP
function App() {
  return (
    <>
    <Router>
      <Layout>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Projects />
              <Activity />
              <Tasks />
              <Messages />
            </>
          } />
          <Route path="/new-project" element={<NewProject />}/>
        </Routes>
      </Layout>
    </Router>
    </>
  );
}

export default App;
