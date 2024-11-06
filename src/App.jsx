import Layout from "./Components/Layout/Layout.jsx";
import Flex from "./Components/Flex.jsx";
// import Recent from "./Components/Recent.jsx";
// import Calendar from "./Components/Calendar/Calendar.jsx";
import Activity from "./Components/Activity.jsx";
import Tasks from "./Components/Tasks.jsx";
import Messages from "./Components/Messages.jsx";
import Projects from "./Components/Projects/Projects.jsx";


function App() {
  return (
    <>
    <Layout >
        <Flex />
        <Projects />
        {/* <Recent />
        <Calendar /> */}
        <Activity />
        <Tasks />
        <Messages />
    </Layout>
    </>
  );
}

export default App;
