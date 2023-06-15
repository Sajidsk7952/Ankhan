import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
// import Room from "./components/Room";
import RoomPage from "./components/RoomPage";
import Root from "./components/Root";
function App() {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index:true,
          element:<HomePage />
        },
        {
          path: "/:roomId",
          element: <RoomPage />,
        }
      ],
    },
  ]);
  return <RouterProvider router={Router}></RouterProvider>;
}
export default App;