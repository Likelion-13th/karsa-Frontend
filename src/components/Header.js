import { Link, useLocation } from "react-router-dom";
import React from "react";
import "../styles/Header.css";


const Header = () => {
    const location = useLocation();
    const currentPage = location.pathname;
    const isMypage = currentPage === "/mypage";
    return(
        <header className={isMypage ? "header-mypage":"Head-contain"}>
        <div className="Head-contain">
            <div className="LIKELION">
                <Link to="/" className={currentPage === "/" ? "active" : ""}>
                    LIKELION
                </Link>
            </div>
            <div className="menu">
                <Link to="/new" className={currentPage === "/new" ? "active" : ""}>
                    New
                </Link>
                <Link to="/perfume" className={currentPage === "/perfume" ? "active" : ""}>
                    Perfume
                </Link>
                <Link to="/diffuser" className={currentPage === "/diffuser" ? "active" : ""}>
                    Diffuser
                </Link>
                <Link to="/mypage" className={currentPage === "/mypage" ? "active" : ""}>
                    Mypage
                </Link>

            </div> 
        </div>   
        
        </header>
    );
};


export default Header;