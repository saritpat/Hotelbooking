import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="sm:ml-40">{children}</div>
        </div>
    );
};

export default Layout;
