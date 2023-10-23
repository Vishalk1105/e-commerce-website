import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { sideBarMenu } from "../constatnts";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
function MainLayout({ children }) {
  const [showSideBar, setShowSideBar] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const data = jwt_decode(token);
  const onLogoutClick = () => {
    console.log("btn clcik");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="h-100">
      <header className="d-flex justify-content-between bg-dark fixed-top text-white px-4 py-2 ">
        <div className="d-flex">
          <h3 className="me-5 align-self-center">Logo</h3>
          <i
            className={`bi ${showSideBar ? "bi-x" : "bi-list"} fs-2`}
            onClick={() => setShowSideBar(!showSideBar)}
          />
        </div>
        <div className="align-self-center">
          Hello, {data.firstName + " " + data.lastName}
        </div>
      </header>
      <div className="sidebarMainContentDiv">
        <div
          style={{ width: showSideBar ? "250px" : "70px" }}
          className="sidebar bg-dark d-flex flex-column justify-content-between"
        >
          <div>
            {sideBarMenu.map((e) => {
              return (
                <Link
                  to={e.path}
                  key={e.key}
                  className="link text-decoration-none text-white"
                >
                  <div className="d-flex px-4 py-3 gap-4">
                    <i className={`${e.icon} fs-3`} />
                    <div
                      className="mb-0 align-self-center fs-5 "
                      style={{ display: showSideBar ? "block" : "none" }}
                    >
                      {e.title}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div
            className="d-flex px-4 py-3 gap-4"
            onClick={onLogoutClick}
            role="button"
          >
            <i className="bi bi-box-arrow-left fs-3" />
            <div
              className="mb-0 align-self-center fs-5"
              style={{ display: showSideBar ? "block" : "none" }}
            >
              Log Out
            </div>
          </div>
        </div>

        <main>{children}</main>
      </div>
      <footer className="footer d-flex bg-dark fixed-bottom text-white justify-content-center px-4 py-2">
        E-commerce website Footer
      </footer>
    </div>
  );
}

export default MainLayout;
