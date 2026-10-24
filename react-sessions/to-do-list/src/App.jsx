import Header from "./components/Header";
// styles for the whole app
import "./App.css";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

// Root component, only decides the layout
// No props needed now, because the data comes from context
const App = () => {
  return (
    <div className="app">
      <Header />

      {/* form to add a task */}
      <AddTask />

      {/* list of all tasks */}
      <Tasks />
    </div>
  );
};

export default App;
