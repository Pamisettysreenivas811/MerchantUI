import axios from "axios";
import React, { useState } from "react";

function RegisterForm() {
  const [post, setPost] = useState({
    name: "",
    email: "",
    businessType: "",
    address: "",
    phone: "",
  });

  const save = (e) => {
    e.preventDefault();

    axios
      .post("/register", { ...post })
      .then((response) => {
        alert(response.data);
      })
      .catch((err) => {});
  };

  const handleInput = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  return (
    <>
      <section id="register">
        <div className="container mt-5">
          <div className="card p-5">
            <h1 className="text-center pb-4"> Registeration Form</h1>
            <form className="row" method="POST" onSubmit={save}>
              <div className="col-12 mt-3">
                <label htmlFor="inputName" className="form-label">
                  Name:-
                </label>
                <input
                  type="text"
                  className="form-control"
                  required
                  id="inputName"
                  name="name"
                  onChange={handleInput}
                />
              </div>
              <div className="col-md-6 mt-4">
                <label htmlFor="inputEmail" className="form-label">
                  Email:-
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  required
                  name="email"
                  onChange={handleInput}
                />
              </div>
              <div className="col-md-6 mt-4">
                <label htmlFor="inputType" className="form-label">
                  Business Type:-
                </label>
                <select
                  id="inputType"
                  className="form-select"
                  required
                  name="businessType"
                  onChange={handleInput}
                >
                  <option selected>Choose...</option>
                  <option>Online Retail</option>
                </select>
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label mt-3">
                  Address:-
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                  required
                  name="address"
                  onChange={handleInput}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPhoneNo" className="form-label mt-4">
                  Phone No:-
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="inputPhoneNo"
                  required
                  name="phone"
                  onChange={handleInput}
                  maxLength="10"
                />
              </div>
              <div className="col-12 text-center">
                <button type="submit" className="btn btn-primary mt-3">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default RegisterForm;
