import ReactInput from "../../components/ReactInput";
import ReactButton from "../../components/ReactButton";
import AddToCart from "./AddToCart";
const ProductListFilter = ({
  onSearchChange,
  searchValue,
  onSearchClick,
  totalOrder,
  addCartData,
  onClickClearFn,
  setAddCartData,
  setTotalOrder,
}) => {
  return (
    <div className="d-flex align-self-center gap-3">
      <ReactInput
        placeholder="Search Product"
        onChange={onSearchChange}
        value={searchValue}
      />
      <ReactButton
        btnClass="btn-dark rounded"
        btnText="Search"
        onClickfn={onSearchClick}
      />
      <ReactButton
        btnClass="btn-outline-danger"
        btnText="Clear"
        onClickfn={onClickClearFn}
      />

      <div className="addToCart">
        <i
          className="cart bi bi-cart-plus-fill position-relative fs-3 me-3 "
          role="button"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary ">
            {totalOrder}
          </span>
        </i>
        <AddToCart
          addToCartClass={"modal fade"}
          addCartData={addCartData}
          setAddCartData={setAddCartData}
          setTotalOrder={setTotalOrder}
          modalId={"staticBackdrop"}
          dataBsBackdrop="static"
          dataBsKeyboard="false"
          tabIndex="-1"
          ariaLabelldby="staticBackdropLabel"
          ariaHidden="true"
        />
      </div>
    </div>
  );
};

export default ProductListFilter;
