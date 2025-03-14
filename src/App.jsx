import React, { useEffect } from "react";
import { 
  BrowserRouter, 
  Routes, 
  Route,
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './App.css';
//import Api from "./exemplo/Api";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import { UserStorage } from "./UserContext";
import User from "./Components/User/User";
import ProtectedRoute from "./Components/Helper/ProtectedRoute";
  
const App = () => { 
  
  // Habilitando transições de navegação usando React.startTransition
  // useEffect(() => {
  //   const router = createBrowserRouter([
  //     {
  //       path: "/",
  //       element: <Home />,
  //     },
  //     {
  //       path: "login/*",
  //       element: <Login />,
  //     },
  //     {
  //       path: "conta/*",
  //       element: (
  //         <ProtectedRoute>
  //           <User />
  //         </ProtectedRoute>
  //       ),
  //     },
  //   ]);

  //   router.history.listen(() => {
  //     // Usando React.startTransition para otimizar as transições
  //     React.startTransition(() => {
  //       router.update();
  //     });
  //   });
  // }, []);

  return (
    <>
      <BrowserRouter> 
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route path="conta/*" 
            element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
              } 
            />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
       
      {/* <Api /> */}
    </>
  )
}

export default App
