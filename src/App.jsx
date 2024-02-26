import "./App.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import About from "./About/About";
import Portfolio from "./portfolio/Portfolio";
import Contact from "./Contact/Contact";
const myRoute = createHashRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/nav",
        element: <p>hello router </p>,
      },

      { path: "", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={myRoute} />;
}

export default App;

// const myRoute = createBrowserRouter([
//   { path: "", element: <Home /> },
//   { path: "/home", element: <Home /> },
//   { path: "/about", element: <About /> },
//   { path: "/gallery", element: <Gallery /> },
//   {
//     path: "/project",
//     element: <Project />,
//     children: [
//       { path: "react", element: <h1>React</h1> },
//       { path: "anglur", element: <h1>anglur</h1> },
//       { path: "android", element: <h1>Android</h1> },
//     ],
//   },
//   { path: "*", element: <h1 className="p-5"> page not found ERR*4 0 4* </h1> },
// ]);
