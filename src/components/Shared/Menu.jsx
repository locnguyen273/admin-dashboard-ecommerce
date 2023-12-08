/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/role-supports-aria-props */
import React, { useState, useContext } from "react";
import { NavLink, Redirect, Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

function Menu() {
  const { user, jwt } = useContext(AuthContext);

  const [menu, setMenu] = useState([
    {
      item: "Customer",
      permission: "user",
    },
    {
      item: "Coupon",
      permission: "user",
    },
    {
      item: "Product",
      permission: "user",
    },
    {
      item: "Sale",
      permission: "user",
    },
    {
      item: "Category",
      permission: "user",
    },
    {
      item: "Order",
      permission: "user",
    },
    {
      item: "ConfirmOrder",
      permission: "user",
    },
    {
      item: "Delivery",
      permission: "user",
    },
    {
      item: "ConfirmDelivery",
      permission: "user",
    },
    {
      item: "CompletedOrder",
      permission: "user",
    },
    {
      item: "CancelOrder",
      permission: "user",
    },
    {
      item: "User",
      permission: "admin",
    },
    {
      item: "Permission",
      permission: "admin",
    },
    // "Category", ,
    // "Permission",
    // "User",
    // "Order",
    // "ConfirmOrder",
    // "Delivery",
    // "ConfirmDelivery",
    // "CompletedOrder",
    // "CancelOrder"
  ]);

  return (
    <div>
      {jwt && user ? (
        <aside className="left-sidebar" data-sidebarbg="skin6">
          <div className="scroll-sidebar" data-sidebarbg="skin6">
            <nav className="sidebar-nav">
              <ul id="sidebarnav">
                <li className="list-divider"></li>

                <li className="nav-small-cap">
                  <span className="hide-menu">Components</span>
                </li>

                <li className="sidebar-item">
                  {" "}
                  <Link
                    className="sidebar-link has-arrow"
                    href="#"
                    aria-expanded="false"
                  >
                    <i data-feather="grid" className="feather-icon"></i>
                    <span className="hide-menu">Tables </span>
                  </Link>
                  <ul
                    aria-expanded="false"
                    className="collapse  first-level base-level-line"
                  >
                    {menu &&
                      menu.map((item, index) => (
                        <li className="sidebar-item active" key={index}>
                          {/* {item.permission === user.role ? ( */}
                          <NavLink
                            to={"/" + item.item.toLowerCase()}
                            className="sidebar-link"
                          >
                            {item.item}
                          </NavLink>
                          {/* ) : (
                            <div></div>
                          )} */}
                        </li>
                      ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
}

export default Menu;
