import Header from "../components/Header";
import Slide from "../components/Slide";

import { Outlet } from "react-router-dom";

function Root() {
    return (
        <>
            <Header />
            <Slide/>
            <Outlet />
        </>
    )
}
export default Root;