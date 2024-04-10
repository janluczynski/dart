import HomePage from "./pages/HomePage";
import RootLayout from "./pages/Root";
import AboutPage from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/about", element: <AboutPage /> },
        { path: "*", element: <ErrorPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
