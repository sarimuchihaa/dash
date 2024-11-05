import Recent from "./Components/Recent.jsx";
import Activity from "./Components/Activity.jsx";
import Tasks from "./Components/Tasks.jsx";
import Layout from "./Components/Layout/Layout.jsx";


function App() {
  return (
    <>
    <Layout >
        <Recent />
        <Activity />
        <Tasks />
    </Layout>
    </>
  );
}

export default App;
