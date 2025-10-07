import {createBrowserRouter} from "react-router";
import {Layout} from "./layout.tsx";
import {Home} from "../components/pages/home/home.tsx";

export const route = createBrowserRouter([
  {
    element: <Layout />,
    path: '/',
    children: [
      {
        element: <Home />,
        index: true
      },
      {},
    ]
  }
])