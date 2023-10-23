import React, { useEffect, useState } from "react";
import MainLayout from "../../../layout/MainLayout";
import ProductlistCard from "./ProductlistCard";
import ReactLoader from "../../components/ReactLoader";
import ProductListFilter from "./ProductListFilter";
import ReactPagination from "../../components/ReactPagination";
import { useSearchParams } from "react-router-dom";
const ProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [productList, setProductList] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalOrder, setTotalOrder] = useState(0);
  const [addCartData, setAddCartData] = useState([]);

  const recordsPerPage = 8;
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = productList.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const numberPages = Math.ceil(productList.length / recordsPerPage);

  const filterData = searchParams.get("search?q=") ?? "";
  useEffect(() => {
    try {
      fetch(`https://dummyjson.com/products/search?q=${filterData}`)
        .then((res) => res.json())
        .then((data) => setProductList(data.products));
    } catch (err) {
      throw err;
    }
  }, [filterData]);
  const onSearchClick = (e) => {
    e.preventDefault();
    const obj = {};
    obj["search?q="] = searchProduct;
    setSearchParams(obj);
  };
  const onClickClearFn = () => {
    setSearchParams("");
  };

  const onAddToCart = (data) => {
    const isItemInCart = addCartData.find(
      (cartItem) => cartItem.id === data.id
    );

    if (isItemInCart) {
      setAddCartData(
        addCartData.map((cartItem) =>
          cartItem.id === data.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setAddCartData([...addCartData, { ...data, quantity: 1 }]);
      setTotalOrder((prevState) => prevState + 1);
    }
  };

  return (
    <MainLayout>
      {productList?.length === 0 ? (
        <ReactLoader />
      ) : (
        <>
          <div className="productListMainDiv d-flex justify-content-between align-middle mt-3">
            <div className="reactPagination align-self-center d-flex">
              <ReactPagination
                nPages={numberPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
            <ProductListFilter
              searchValue={searchProduct}
              onSearchChange={(e) => setSearchProduct(e.target.value)}
              onSearchClick={onSearchClick}
              totalOrder={totalOrder}
              addCartData={addCartData}
              onClickClearFn={onClickClearFn}
              setAddCartData={setAddCartData}
              setTotalOrder={setTotalOrder}
            />
          </div>
          <div className="productListDiv">
            {currentRecords?.map((ele) => (
              <ProductlistCard
                data={ele}
                key={ele.id}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        </>
      )}
    </MainLayout>
  );
};

export default ProductList;
