import "./App.css";
import MainRoutes from "./Components/AllRoutes/MainRoutes";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

function App() {
  // let isAuth = false;
  return (
    <div className="App">
      {/* {isAuth ? "" : <Header />} */}
      {/* <MainRoutes /> */}
      {/* {isAuth ? "" : <Footer />} */}
      <Header />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
