import {RouterProvider} from "react-router-dom";
import {route} from "./routes/route.tsx";

function App() {
  return <RouterProvider router={route} />
}

export default App
