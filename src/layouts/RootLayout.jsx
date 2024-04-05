import { NavLink, Outlet } from "react-router-dom";
import  "../styles/index.css";

function RootLayout() {
    return (
    <>
        <NavLink
            className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" :""
            } 
            style = {{
                marginRight: "5px",
                paddingRight: "3px",
                paddingLeft: "3px",
            }}
            to="/">
            Home
        </NavLink>
         |
         <NavLink
            className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" :""
            } 
            style = {{
                marginRight: "5px",
                marginLeft: "5px",
                paddingRight: "3px",
                paddingLeft: "3px",
            }}
            to="/blog">
            Blog
        </NavLink>
         |
         <NavLink
            className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" :""
            } 
            style = {{
                marginRight: "5px",
                marginLeft: "5px",
                paddingRight: "3px",
                paddingLeft: "3px",
            }}
            to="/about">
            About
        </NavLink>
         |
        <p />
        <Outlet />
    </>
);
}
export default RootLayout;  