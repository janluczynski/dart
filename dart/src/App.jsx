import HomePage from "./pages/HomePage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import RootLayout from "./pages/Root";
import AboutPage from "./pages/About";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/about", element: <AboutPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
