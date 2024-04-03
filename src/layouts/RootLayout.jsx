import { Link, Outlet } from "react-router-dom";

function RootLayout() {
    return (
    <>
        <Link to="/">Homepage</Link> | <Link to="/about">About</Link>
    </>
);
}
export default RootLayout;  