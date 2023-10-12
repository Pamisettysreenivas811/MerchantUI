import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="">
            MERCHANT UI
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarnav"
            aria-controls="navbarnav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarnav"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item mr-5">
                <Link className="navbar-brand" to="register">
                  Register
                </Link>
              </li>
              <li className="nav-item mr-5">
                <Link className="navbar-brand" to="payment">
                  Payment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navbar-brand" to="paymentcheck">
                  PaymentStatus
                </Link>
              </li>
              <li className="nav-item" style={{ marginRight: "90px" }}>
                <Link className="navbar-brand" to="paymentstatus">
                  MerchantPaymentStatus
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
