
import './App.css';
import MainRoutes from './Components/AllRoutes/MainRoutes';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
