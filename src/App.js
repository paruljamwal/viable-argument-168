import "./App.css";
import MainRoutes from "./Components/AllRoutes/MainRoutes";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { useSelector } from "react-redux";
import { Box } from "@chakra-ui/react";

function App() {
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);

  return (
    <div className="App">
      <Box>
        {isAuth ? "" : <Header />}
        <MainRoutes />
        {isAuth ? "" : <Footer />}
      </Box>
    </div>
  );
}

export default App;