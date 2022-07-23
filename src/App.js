import "./App.css";
import MainRoutes from "./Components/AllRoutes/MainRoutes";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <MainRoutes />
      <Footer />

    </div>
  );
}

export default App;
