import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

// style
import "./leaderboard.scss";

const useIndex = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  async function getLeaderboard() {
    try {
      const response = await axios.get(
        "https://forum-api.dicoding.dev/v1/leaderboards"
      );
      console.log(response);
      setLeaderboard(response.data.data.leaderboards);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getLeaderboard();
  }, []);

  return (
    <div className="App">
      <Header />

      <div className="content">
        <div className="container text-center">
          <div className="row align-items-start">
            <div className="col column">
              <h1>Leaderboard</h1>
              <div className="comment-box-title d-flex">
                <div className="col">Nama</div>
                <div className="col">Skor</div>
              </div>
              {leaderboard.map((entry, index) => (
                <div className="comment-box d-flex" key={index}>
                  <div className="col">{entry.user.name}</div>
                  <div className="col">{entry.score}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default useIndex;
