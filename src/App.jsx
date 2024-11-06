import Layout from "./Components/Layout/Layout.jsx";
import Flex from "./Components/Flex.jsx";
import Recent from "./Components/Recent.jsx";
import Activity from "./Components/Activity.jsx";
import Tasks from "./Components/Tasks.jsx";
import Calendars from "./Components/Calendars.jsx";
import Messages from "./Components/Messages.jsx";
import Calendar from "./Components/Calendar/Calendar.jsx";


function App() {
  return (
    <>
    <Layout >
        <Flex />
        <Recent />
        <Activity />
        <Tasks />
        <Calendars />
        <Messages />
        <Calendar />
    </Layout>
    </>
  );
}

export default App;
