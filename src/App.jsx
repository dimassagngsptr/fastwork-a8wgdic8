import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/landing-page";

const router = createBrowserRouter([{ path: "/", element: <Home /> }]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
