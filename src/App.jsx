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
        path: "about",
        element: <About />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
