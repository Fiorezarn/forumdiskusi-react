import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router'
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "./detail.scss"

function Detail() {
  const { id } = useParams();
  const [threads, setThreads] = useState([]);
  const [comment, setComment] = useState(""); // State for the comment input

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

  function formatRelativeTime(createdAt) {
    // ... Your existing code for time formatting ...
  }
  
  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handleSubmitComment(event) {
    event.preventDefault();
    // Perform action to submit the comment to the server
    // You can use axios or any other method to send the comment data
    console.log("Comment submitted:", comment);
    setComment(""); // Clear the comment input after submission
  }
  
  return (
    <div className="App">
      <Header />
      <div className="container p-4">
        <div className="center-content row">
          {threads && (
            <div className="col-lg-8 mx-auto">
              <div className="col">
                <h2>{threads.title}</h2>
                <p>{threads.category}</p>
                <p>{threads.body}</p>
                {/* Render other thread details here */}
              </div>
            </div>
          )}
          <div className="profile col column">
            <img src={threads.owner?.avatar} alt="Avatar" crossOrigin="anonymous" />
            <p>{threads.owner?.name}</p>
            <p>{formatRelativeTime(threads.createdAt)}</p>
          </div>
        </div>

        {/* Comment Box */}
        <div className="comment-box">
          <h3>Add a Comment</h3>
          <form onSubmit={handleSubmitComment}>
            <textarea
              className="form-control"
              value={comment}
              onChange={handleCommentChange}
              placeholder="Write your comment here..."
              rows="4"
            />
            <button type="submit" className="btn btn-primary mt-3">Submit Comment</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Detail;
