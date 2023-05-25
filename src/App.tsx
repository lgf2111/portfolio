import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./pages/Error";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/portfolio/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/portfolio/about",
    element: <About />,
  },
  {
    path: "/portfolio/projects",
    element: <Projects />,
  },
  {
    path: "/portfolio/contact",
    element: <Contact />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
