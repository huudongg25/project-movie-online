import React from "react";
import { BsCalendarDate, BsFillStickiesFill } from "react-icons/bs";
import { BiMoney, BiPurchaseTagAlt } from "react-icons/bi";
import "./PaymentHistory.css";
const PaymentHistory = () => {
  return (
    <div>
      <section className="section-history">
        <h2 className="title-h2">Payment History</h2>
        <table>
          <thead>
            <tr>
              <tr>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
              </tr>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>kungfu</td>
              <td>fffffff</td>
              <td>6666 $</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default PaymentHistory;
