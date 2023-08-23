import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router'
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "./detail.scss"

function Detail() {
  const { id } = useParams();
  const [threads, setThreads] = useState([]);

  async function getDetail() {
    try {
      const response = await axios.get(
        `https://forum-api.dicoding.dev/v1//threads/${id}`
      );
      setThreads(response.data.data.detailThread);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getDetail();
  }, []);
  
  return (
    <div className="App">
        <Header />
    <div className="container p-4">
    <div className="center-content">
      {threads && (
        <div className="col-lg-8 mx-auto">
          <div className="col">
          <img src={threads.avatar} alt="Avatar" crossOrigin="anonymous" />
            <h2>{threads.title}</h2>
            <p>Category: {threads.category}</p>
            <p>{threads.body}</p>
            {/* Render other thread details here */}
          </div>
        </div>
      )}
    </div>

    </div>
    <Footer />
    </div>
  );
}

export default Detail;
