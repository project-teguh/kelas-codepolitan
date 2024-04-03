import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";

import Homepage from "../pages/Index";
import About from "../pages/About";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <RootLayout />,
        children: [
            {
                path:"/",
                element: <Homepage />,
            },
            {
                path:"/about",
                element: <About />,
            },
        ],
    },
]);