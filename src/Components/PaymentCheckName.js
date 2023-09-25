import axios from "axios";
import React, { useState } from "react";

function PaymentCheckName() {
  const [parameter, setParameter] = useState({
    q: "",
  });

  const [queryParamter, setQueryParameter] = useState("");

  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setParameter({
      ...parameter,
      [name]: value,
    });
  };

  const handleButtonClick = () => {
    setQueryParameter(parameter.q);

    axios
      .get(`/paymentstatus?q=${queryParamter}`)
      .then((response) => {
        setData(response.data);
        console.log(data);
      })
      .catch((error) => {});
  };

  return (
    <>
      <section id="paymentstatus">
        <div className="container m-5">
          <div className="card p-5 m-5">
            <form className="row">
              <h1 className="form-title text-center pb-4">PaymentStatus</h1>
              <div className="col-md-6">
                <label htmlFor="inputMerchantName" className="form-label">
                  Merchant Name :-
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputMerchantName"
                  name="q"
                  value={parameter.q}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 text-center">
                <button
                  type="submit"
                  className="btn btn-primary mt-4"
                  onClick={handleButtonClick}
                >
                  Search
                </button>
              </div>
            </form>

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
          </div>
        </div>
      </section>
    </>
  );
}

export default PaymentCheckName;
