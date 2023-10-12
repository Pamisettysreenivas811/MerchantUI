import axios from "axios";
import React, { useState } from "react";

function PaymentCheck() {
  const [paymentId, setPaymentId] = useState("");

  const [records, setRecords] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let pay = parseInt(paymentId);
    axios
      .get("/getstatus/" + pay)
      .then((res) => {
        setRecords(res.data);
      })
      .catch((error) => {
        alert(error.response.data);
      });
  };

  return (
    <>
      <section id="paymentcheck">
        <div className="container m-5">
          <div className="card p-5 m-5">
            <form className="row" onSubmit={handleSubmit}>
              <h1 className="form-title text-center pb-4">PaymentStatus</h1>
              <div className="col-md-6">
                <label htmlFor="inputPaymentId" className="form-label">
                  PaymentId:-
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="inputPaymentId"
                  value={paymentId}
                  onChange={(event) => {
                    setPaymentId(event.target.value);
                  }}
                  placeholder="Enter the id you want to check"
                />
              </div>
              <div className="col-md-6 text-center">
                <button type="submit" className="btn btn-primary mt-4">
                  Search
                </button>
              </div>
            </form>
            {records.length === 0 ? (
              <p>No data found for the given query.</p>
            ) : (
              <table className="table mt-5" border={2} cellPadding={10}>
                <thead>
                  <tr>
                    <th scope="col">PaymentId</th>
                    <th scope="col">Amount</th>
                    <th scope="col">MerchantId</th>
                    <th scope="col">Currency</th>
                    <th scope="col">orderId</th>
                    <th scope="col">Status</th>
                    <th scope="col">Customer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{records.paymentId}</td>
                    <td>{records.amount}</td>
                    <td>{records.merchantId}</td>
                    <td>{records.currency}</td>
                    <td>{records.orderId}</td>
                    <td>{records.paymentStatus}</td>
                    <td>{records.customerName}</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default PaymentCheck;
