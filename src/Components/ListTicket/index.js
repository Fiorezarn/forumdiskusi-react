import React from "react";

import "./ListTicket.scss";

import Arrow from "../../Assets/Icon/Arrow.svg";

const index = () => {
  return (
    <div className="container">
      <div className="list-wrapper">
        <div className="heading">
          <p>Nama Kereta</p>
          <p>Berangkat</p>
          <p></p>
          <p>Tiba</p>
          <p>Durasi</p>
          <p>Harga Per Orang</p>
        </div>

        <div className="list-section">
          <div className="list">
            <div>
              <h4>Argo Wills</h4>
              <p>Eksekutif(H)</p>
            </div>
            <div>
              <h4>05.00</h4>
              <p>Gambir</p>
            </div>
            <div>
              <img src={Arrow} alt="" />
            </div>
            <div>
              <h4>10.05</h4>
              <p>Surabaya</p>
            </div>
            <div>
              <h4>5j 46m</h4>
            </div>
            <div>
              <h4>Rp. 250.000</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
