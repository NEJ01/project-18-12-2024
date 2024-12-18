
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Category from './components/Category/Category';
import Categoryview from './components/Category/Categoryview';
import Categoryedit from './components/Category/Categoryedit';
import Food from './components/Food/Food';
import Foodview from './components/Food/Foodview';
import Foodedit from './components/Food/Foodedit';
import Landing from './components/Landing/Landing';
import Breakfast from './components/home/Breakfast';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path ={'/'} element={<Login method='POST'/>}></Route>
        <Route path ={'/Signup'} element={<Signup method='POST'/>}></Route>
        
        <Route path={'/navbar'} element={<Navbar/>}></Route>

        <Route path={'/home'} element={<Home/>}></Route>
        <Route path={'/category'} element={<Category/>}></Route>
        <Route path={'/Food'} element={<Food/>}></Route>
        <Route path={'/Categoryview'} element={<Categoryview/>}></Route>
        <Route path={'/Categoryedit'} element={<Categoryedit/>}></Route>
        <Route path={'/Foodview'} element={<Foodview/>}></Route>
        <Route path={'/Foodedit'} element={<Foodedit/>}></Route>
        <Route path={'/lan'} element = {<Landing/>}></Route>
        <Route path={'/break'} element = {<Breakfast/>}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
