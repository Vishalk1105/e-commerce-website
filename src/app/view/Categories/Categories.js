import React, { useEffect, useState } from "react";
import MainLayout from "../../../layout/MainLayout";
import ReactButton from "../../components/ReactButton";
import { Link } from "react-router-dom";
const Categories = () => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    try {
      fetch("https://dummyjson.com/products/categories")
        .then((res) => res.json())
        .then((data) => setCategoryData(data));
    } catch (err) {
      throw err;
    }
  }, []);

  return (
    <MainLayout>
      <h3>Categories</h3>
      <div className="category">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Category Name</th>
              <th scope="col" className="text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {categoryData.map((ele, i) => (
              <tr key={ele}>
                <th>{i + 1}</th>
                <td>{ele}</td>
                <td>
                  <Link to={`/products/category/${ele}`}>
                    <ReactButton
                      btnClass={"btn btn-danger"}
                      btnText={"View"}
                      btnType={"button"}
                    />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MainLayout>
  );
};

export default Categories;
