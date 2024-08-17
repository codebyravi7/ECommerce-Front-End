import React, { useContext, useState, useEffect } from "react";
import AppContext from "../context/AppContext";
import ShowOrderProduct from "./ShowOrderProduct";

function AllOrders() {
  const { userOrder } = useContext(AppContext);

  return (
    <div className="bg-white content-wrapper  h-full min-w-screen max-w-screen min-h-screen p-2 text-white">
      <h1 className="text-3xl text-center">AllOrders</h1>
      {userOrder.length == 0 && console.log("userorders not found!!! ")}
      {userOrder.length > 0 &&
        userOrder?.map((order) => (
          <div key={order?._id}>
            <h1 className="bg-light text-dark text-center text-2xl font-semibold shadow-lg">
              Product here
            </h1>
            <table className="table bg-slate-200 table-bordered border-secondary bg-dark">
              <thead>
                <tr>
                  <th scope="col" className="bg-light text-dark text-center">
                    Order Items
                  </th>
                  <th scope="col" className="bg-light text-dark text-center">
                    OrderDetails & ShippingAddress
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="bg-light text-dark text-center">
                    <ShowOrderProduct items={order?.orderItems} />
                  </td>
                  <td className="bg-light text-dark text-center">
                    <ul>
                      <li>OrderId : {order?.orderId}</li>
                      <li>PaymentId : {order?.paymentId}</li>
                      <li>Payment Status : {order?.payStatus}</li>
                      <li>Name : {order?.userShipping?.fullName}</li>
                      <li>Phone : {order?.userShipping?.phoneNumber}</li>
                      <li>Pincode : {order?.userShipping?.pincode}</li>
                      <li>Address : {order?.userShipping?.address}</li>
                      <li>City : {order?.userShipping?.city}</li>
                      <li>State : {order?.userShipping?.state}</li>
                      <li>Country : {order?.userShipping?.country}</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
    </div>
  );
}

export default AllOrders;
