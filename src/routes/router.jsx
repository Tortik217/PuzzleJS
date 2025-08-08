import { createBrowserRouter } from "react-router-dom";
import MainPuzzlePanel from "@/pages/components/MainPuzzlePanel/MainPazzlePanel";
import Root from "./root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <MainPuzzlePanel></MainPuzzlePanel>
      }
    ]
  }
])

export default router