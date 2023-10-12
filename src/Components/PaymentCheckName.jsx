import axios from "axios";
import React, { useState } from "react";

function PaymentCheckName() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const fetchData = async (query) => {
    try {
      const response = await axios.get(`/paymentstatus?q=${query}`);
      setData(response.data);
    } catch (error) {
      alert(error.response.data);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query !== "") {
      fetchData(query);
    }
  };

  return (
    <>
      <section id="paymentstatus">
        <div className="container m-5">
          <div className="card p-5 m-5">
            <form className="row" onSubmit={handleSubmit}>
              <h1 className="form-title text-center pb-4">PaymentStatus</h1>
              <div className="col-md-6">
                <label htmlFor="inputMerchantName" className="form-label">
                  Merchant Name :-
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputMerchantName"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <div className="col-md-6 text-center">
                <button type="submit" className="btn btn-primary mt-4">
                  Search
                </button>
              </div>
            </form>
            {data.length === 0 ? (
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
                  {data.map((item) => (
                    <tr key={item.paymentId}>
                      <td>{item.paymentId}</td>
                      <td>{item.amount}</td>
                      <td>{item.merchantId}</td>
                      <td>{item.currency}</td>
                      <td>{item.orderId}</td>
                      <td>{item.paymentStatus}</td>
                      <td>{item.customerName}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default PaymentCheckName;
