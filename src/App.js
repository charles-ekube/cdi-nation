import NavBar from "./widgets/NavBar";
import Footer from './widgets/Footer'
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./pages/home/Home";
import New from "./pages/new/New";
import Home from "./pages/home/Home";
// import RoutesContainer from "./routes/Routes";


function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar /> 
    <Routes>
      <Route path='/' element ={<Home /> } />
      <Route path = '/new' element = {<New />} />
    </Routes>
    </BrowserRouter>
      {/* <RoutesContainer /> */}
      
    </>
  );
}

export default App;
