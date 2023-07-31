import './App.css';
import Home from './screens/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from './screens/Login';
import Deset from './screens/Deset';
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark-min.css'
// import Navbar from "./components/Navbar"
import Signup from './components/signup/Signup';
import Mainpage from './components/Mainpage/Mainpage';
import Login from './components/signup/Login';
import { CardProvider } from './components/ContextReducer';
import Cart from './screens/Cart';
import MyOrder from './screens/MyOrder';



function App() {
  return (
    <CardProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/desert" element={<Deset />} />
          <Route exact path="/mainpage" element={<Mainpage />} />
          <Route exact path='/mycart' element={<Cart/>}/>
          <Route exact path='/myorder' element={<MyOrder/>}/>
        </Routes>
      </BrowserRouter>
    </CardProvider>

  );
}

export default App;
