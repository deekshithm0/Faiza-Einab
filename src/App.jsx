import "./App.css"
import Home from "./pages/Home"
import About from "./pages/About"
import AppLayout from "./components/AppLayout"
import { RouterProvider } from "react-router-dom"
import { createBrowserRouter } from "react-router-dom"
import Products from "./pages/Products"
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
        path: "about",
        element: <About />,
      },
      {
        path: "products",
        element: <Products/>,
      }
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
