import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Login from './compoents/Login';
import Header from "./compoents/Header";
import Home from "./compoents/Home";
import Detail from "./compoents/Detail";


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Login/>}> </Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/detail/:id" element={<Detail/>}></Route>
    </Routes>
    </Router>
  );
}

export default App;
