import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './Component/Main/Header.js/Header';
import LogIn from './Component/Main/Header.js/LogIn';
import Register from './Component/Main/Header.js/Register';
import Main from './Component/Main/Main';
import Home from './Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
          path:'/home',
          element:<Home></Home>
        },
        {
          path:'/header',
          element:<Header></Header>
        },
        {
          path:'/login',
          element:<LogIn></LogIn>
        },
        {
          path:'/register',
          element:<Register></Register>
        }
      ]

      
    }
  ])


  
    return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
