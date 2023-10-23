import React, { useCallback, useEffect, useState } from "react";

import ReactButton from "../../components/ReactButton";

const AddToCart = ({
  addToCartClass,
  addCartData,
  setAddCartData,
  modalId,
  dataBsBackdrop,
  dataBsKeyboard,
  tabIndex,
  ariaLabelldby,
  ariaHidden,
  setTotalOrder,
}) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const totalPriceFn = useCallback(() => {
    let ans = 0;
    addCartData.map((item) => (ans += item.price * item.quantity));
    setTotalPrice(ans);
  }, [addCartData]);

  useEffect(() => {
    totalPriceFn();
  }, [totalPriceFn]);

  const removeItem = (id) => {
    const arr = addCartData.filter((ele) => id !== ele.id);
    setAddCartData(arr);
    setTotalOrder((prevNum) => prevNum - 1);
  };

  const addToCart = (item) => {
    console.log(item.quantity);
    const isItemInCart = addCartData.find(
      (cartItem) => cartItem.id === item.id
    );

    if (isItemInCart) {
      setAddCartData(
        addCartData.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: parseInt(cartItem.quantity + 1) }
            : cartItem
        )
      );
    } else {
      setAddCartData([...addCartData, { ...item, quantity: 1 }]);
    }
  };

  const removeToCart = (item) => {
    const isItemInCart = addCartData.find(
      (cartItem) => cartItem.id === item.id
    );

    if (isItemInCart) {
      setAddCartData(
        addCartData.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: parseInt(cartItem.quantity - 1) }
            : cartItem
        )
      );
    } else {
      setAddCartData([...addCartData, { ...item, quantity: 1 }]);
    }
  };

  return (
    <div
      className={`${addToCartClass}`}
      id={modalId}
      data-bs-backdrop={dataBsBackdrop}
      data-bs-keyboard={dataBsKeyboard}
      tabIndex={tabIndex}
      aria-labelledby={ariaLabelldby}
      aria-hidden={ariaHidden}
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header border-botto">
            <h4 className="modal-title fs-5" id="staticBackdropLabel">
              Your Cart
            </h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <table className="table">
              <tbody>
                {addCartData?.length !== 0 ? (
                  addCartData.map((ele) => (
                    <React.Fragment key={ele.id}>
                      <tr>
                        <td width="30%">{ele.title}</td>
                        <td width="10%">{ele.price}</td>
                        {ele.id && (
                          <td className="d-flex justify-content-around ">
                            <ReactButton
                              btnClass={"btn btn-dark"}
                              btnText={"+"}
                              onClickfn={() => addToCart(ele)}
                            />
                            <div className="align-self-center">
                              {ele.quantity}
                            </div>
                            <ReactButton
                              btnClass={"btn btn-dark"}
                              btnText={"-"}
                              onClickfn={() => removeToCart(ele)}
                            />
                          </td>
                        )}
                        <td>
                          <ReactButton
                            btnClass="btn-danger rounded"
                            btnText="X"
                            onClickfn={() => removeItem(ele.id)}
                          />
                        </td>
                        <td>{ele.price * ele.quantity}</td>
                      </tr>
                    </React.Fragment>
                  ))
                ) : (
                  <tr>
                    <td>
                      <h4 className="text-center">Cart is Empty</h4>
                    </td>
                  </tr>
                )}
                <tr className="text-end fs-4 fw-3">
                  <td colSpan={5} className="pe-4">
                    Total Price: {totalPrice}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
