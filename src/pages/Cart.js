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
                <div className="table-wrap">
                  <table>
                    <tbody>
                      <tr className="table-head">
                        <th className="column-1">Prduct</th>
                        {/* <th className="column-1"></th> */}
                        <th className="column-1">Prduct</th>
                        <th className="column-1">Prduct</th>
                        <th className="column-1">Prduct</th>
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
