import "./App.css"
import Home from "./pages/Home"
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
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
