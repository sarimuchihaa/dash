// IMPORTS
import Layout from "./Components/Layout/Layout.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import Activity from "./Components/Activity/Activity.jsx";
import Tasks from "./Components/Tasks/Tasks.jsx";
import Messages from "./Components/Messages/Messages.jsx";



// APP
function App() {
  return (
    <>
    <Layout >
        <Navbar />
        <Projects />
        <Activity />
        <Tasks />
        <Messages />
    </Layout>
    </>
  );
}

export default App;
