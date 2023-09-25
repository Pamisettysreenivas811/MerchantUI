import axios from "axios";
import React, { useState } from "react";

function Payment() {
  const [post, setPost] = useState({
    merchantId: "",
    currency: "",
    amount: "",
    orderId: "",
    customerName: "",
  });

  const [message, setMessage] = useState("");

  const save = (e) => {
    e.preventDefault();
    axios
      .post("/paymentform", { ...post })
      .then((response) => setMessage(response.data))
      .catch((err) => alert(err.response.data));
  };

  const handleInput = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  return (
    <>
      <section id="payment">
        <div className="container m-5">
          <div className="card p-5 m-5">
            <form className="row" method="POST" onSubmit={save}>
              <h1 className="text-center pb-4 form-title"> Payment Form</h1>
              <div className="col-md-6 mt-4">
                <label htmlFor="inputMerchantId" className="form-label">
                  Merchant Id :-
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="inputMerchantId"
                  name="merchantId"
                  onChange={handleInput}
                  placeholder="Ask the Merchant..."
                  required
                />
              </div>
              <div className="col-md-6 mt-4">
                <label htmlFor="inputCurrency" className="form-label">
                  Currency
                </label>
                <select
                  id="inputCurrency"
                  className="form-select"
                  name="currency"
                  onChange={handleInput}
                  required
                >
                  <option>Choose...</option>
                  <option>USD</option>
                  <option>INR</option>
                </select>
              </div>
              <div className="col-md-6 mt-4">
                <label htmlFor="inputAmount" className="form-label">
                  Amount :-
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="inputAmount"
                  name="amount"
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="col-md-6 mt-4">
                <label htmlFor="inputOrderId" className="form-label">
                  OrderId :-
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputOrderId"
                  name="orderId"
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="col-md-6 mt-4">
                <label htmlFor="inputCustomerName" className="form-label">
                  Customer Name :-
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCustomerName"
                  name="customerName"
                  onChange={handleInput}
                  required
                />
              </div>

              <div className="col-12 text-center">
                <button type="submit" className="btn btn-primary mt-5 ">
                  Payment
                </button>
              </div>
            </form>
          </div>
          {message && (
            <div
              className="response-message text-center pt-4"
              style={{ fontSize: 30 }}
            >
              {message}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Payment;
