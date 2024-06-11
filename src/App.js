import { Alert, Button, Container, Form, FormControl, InputGroup, Nav, NavDropdown,  Navbar } from 'react-bootstrap';
import './App.css';
import MyCustom from './comp/MyCustom';
import { useState } from 'react';
import { Link, NavLink, RouterProvider, createBrowserRouter } from 'react-router-dom';
import MyNav from './comp/MyNav';

// import base_url from "./app_const.mjs"

function App() {
  const [email, setEmail] = useState("gvgvgvvgvg");
  const router=createBrowserRouter([
    {
        path:"/",
        element:<MyNav><div> jbvhbdhfvbdfhjvbdjkf</div></MyNav>
    },
    {
        path:"/home",
        element:<><MyNav/> <MyCustom onChange={(event) => {
            setEmail(event.target.value.toUpperCase());
          }} /></>
    },
    {
        path:"/info",
        element:<div><MyNav></MyNav>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum non, soluta necessitatibus maxime laborum expedita totam enim dicta. Ad quo iure, sed reprehenderit cumque consectetur nihil id quos ratione asperiores!
        </div>
    }
]);
  return (
    <>
      {/* <Alert key="success"> hi</Alert>
      {email} */}
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
