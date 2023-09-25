import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Payment from "./Components/Payment";
import RegisterForm from "./Components/RegisterForm";
import PaymentCheck from "./Components/PaymentCheck";
import Navbar from "./Components/Navbar";
import PaymentCheckName from "./Components/PaymentCheckName";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/register" exact element={<RegisterForm />}></Route>
          <Route path="/payment" exact element={<Payment />}></Route>
          <Route path="/paymentcheck" exact element={<PaymentCheck />}></Route>
          <Route
            path="/paymentstatus"
            exact
            element={<PaymentCheckName />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
