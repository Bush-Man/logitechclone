
import './App.css';

import Shop from './Components/Shop/Shop';
import About from './Pages/About/About';
import Careers from './Pages/Careers/Careers';
import Home from './Pages/Home/Home.jsx';
import {
  createBrowserRouter, Outlet, RouterProvider
} from "react-router-dom";
  
const Layout = () => {
  return (
    <>
      <Outlet />
      
    </>
  )
}
const router = createBrowserRouter([

  {
    path: "/",
    element:<Home />
  },
  {
    path: "/about/careers",
    element:<Careers />
  },
   {
    path: "/about/ourstory",
    element:<About />
  },


])


function App() {
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
