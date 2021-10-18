import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import "../styles/Pages.css";

function Cart() {
  return (
    <div className="cart">
      <div className="cart-wrap">
        <div className="back-link">
          <Link to="/" className="home">
            <span>Home</span> <IoIosArrowForward className="home-arrow" />
          </Link>
          <span className="shopping-cart">Shopping Cart</span>
        </div>
        <form>
          <div className="form-container">
            <div className="for-table">
              <div className="left-table">
                <div className="left-table-wrap">
                  <table className="first-table">
                    <tbody>
                      <tr className="table-head">
                        <th className="column-1">Prduct</th>
                        <th className="column-2"></th>
                        <th className="column-3">Prduct</th>
                        <th className="column-4">Prduct</th>
                        <th className="column-5">Prduct</th>
                      </tr>
                      <tr className="table-row">
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cart;
