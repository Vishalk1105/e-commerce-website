import React from "react";
import MainLayout from "../../layout/MainLayout";
import jwt_decode from "jwt-decode";
const MyProfile = () => {
  const token = localStorage.getItem("token");
  const userData = jwt_decode(token);
  console.log(userData, "data");

  return (
    <MainLayout>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-7">
            <div className="card p-3 py-4">
              <div className="text-center">
                <img
                  src={userData.image}
                  width="100"
                  className="rounded-circle"
                  alt=""
                />
              </div>

              <div className="text-center mt-3">
                <span className="bg-secondary p-1 px-4 rounded text-white">
                  {userData.email}
                </span>
                <h5 className="mt-2 mb-0">
                  {userData.firstName + " " + userData.lastName}
                </h5>
                <span>{userData.username}</span>

                <div className="px-4 mt-1">
                  <p className="fonts">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default MyProfile;
