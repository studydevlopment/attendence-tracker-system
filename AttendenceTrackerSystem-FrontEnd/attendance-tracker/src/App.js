import "./App.scss";
import Home from "./components/home/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import EmployeeList from "./components/manager-component/EmployeeList";

function App() {
  return (
    <div className="App" >
      {/* <Home /> */}
      {/* <ResponsiveDatePickers /> */}
      <EmployeeList  />
    </div>
  );
}

export default App;
