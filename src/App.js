import "./App.css";
import MainRoutes from "./Components/AllRoutes/MainRoutes";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Sidebar from "./Pages/Sidebar";

function App() {
  return (
    <div className="App">
      {/* <Header/>
      <MainRoutes/>
      <Footer/> */}

      <Sidebar/>
    </div>
  );
}

export default App;
