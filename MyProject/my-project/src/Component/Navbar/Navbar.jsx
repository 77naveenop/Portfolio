import React from "react";
import "./Navbar.css";




const Navbar = () => {
    return (
    <div className="Navbar-box">
        <div style={{ background: "transparent", position: "absolute", width: "100%", top: 0 }}>
            <div style={{ background: "transparent" }}>
                <div className="container pt-3 pb-2">
                    <div className="row justify-content-between align-items-center">
                        <div className=" col-auto text-white">
                            <div className="row">
                                <div className="col-auto"><span className="text">Home</span></div>
                                <div className="col-auto"><span className="text">About</span></div>
                                <div className="col-auto"><span className="text">Contact us</span></div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
</div>


    )
}
export default Navbar;