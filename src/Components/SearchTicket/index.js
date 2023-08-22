import React from "react";

import OptionTrain from "../../Assets/Icon/option-train.svg";
import Rounded from "../../Assets/Icon/Rounded.svg";

import "./SearchTicket.scss";

const index = () => {
  return (
    <div className="container">
      <div className="search-wrapper">
        <div className="options-wrapper">
          <div className="options">
            <img src={OptionTrain} alt="Logo-kereta" />
            <p>Tiket Kereta Api</p>
          </div>
        </div>

        <div className="section-value">
          <p className="judul">Tiket Kereta Api</p>
          <div className="destination">
            <div className="section-asal">
              <p>Asal</p>
              <input type="text" placeholder="Jakarta" className="input-text" />

              <div className="jadwal">
                <div className="tanggal">
                  <p>Tanggal Berangkat</p>
                  <input type="date" name="jadwal" placeholder="DD - MM - YY" />
                </div>

                <div>
                  <input type="checkbox" name="pp" value="pp" />
                  <label htmlFor="pp">Pulang Pergi</label>
                </div>
              </div>
            </div>

            <img src={Rounded} alt="" />

            <div className="section-tujuan">
              <p>Tujuan</p>
              <input
                type="text"
                placeholder="Surabaya"
                className="input-text"
              />

              <div className="banyak-tiket">
                <div className="pilihan">
                  <p>Dewasa</p>
                  <input type="text" name="dewasa" placeholder="0" />
                </div>
                <div className="pilihan">
                  <p>Bayi</p>
                  <input type="text" name="bayi" placeholder="0" />
                </div>
                <div className="pilihan">
                  <button type="submit">Cari Tiket</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
