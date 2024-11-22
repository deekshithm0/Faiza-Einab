import "./App.css"
import Home from "./pages/Home"
import About from "./pages/About"
import AppLayout from "./components/AppLayout"
import { RouterProvider } from "react-router-dom"
import { createBrowserRouter } from "react-router-dom"
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
<<<<<<< HEAD
        path: "about",  
        element: <About />,
      },
=======
        path: "about",
        element: <About />,
      }
>>>>>>> d4819970c389ff1afbf7376529c1c0f0bb6ae9a2
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
