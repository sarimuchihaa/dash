import Layout from "./Components/Layout/Layout.jsx";
import Flex from "./Components/Flex.jsx";
import Recent from "./Components/Recent.jsx";
import Activity from "./Components/Activity.jsx";
import Tasks from "./Components/Tasks.jsx";
import Calender from "./Components/Calender.jsx";
import Messages from "./Components/Messages.jsx";


function App() {
  return (
    <>
    <Layout >
        <Flex />
        <Recent />
        <Activity />
        <Tasks />
        <Calender />
        <Messages />
    </Layout>
    </>
  );
}

export default App;
