import Header from "./components/Header";
import "./App.css";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

const App = () => {
  return (
    <div className="app">
      <Header />
      <AddTask />
      <Tasks />
    </div>
  );
};

export default App;
