import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import axios from "axios";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

// style
import "./Homepage.scss";

const Thread = () => {
  const [threads, setThreads] = useState([]);
  const [users, setUsers] = useState([]);

  async function getThreads() {
    try {
      const response = await axios.get(
        "https://forum-api.dicoding.dev/v1/threads"
      );
      setThreads(response.data.data.threads);
    } catch (error) {
      console.error(error);
    }
  }

  async function getUsers() {
    try {
      const response = await axios.get(
        "https://forum-api.dicoding.dev/v1/users"
      );
      setUsers(response.data.data.users);
    } catch (error) {
      console.error(error);
    }
  }

  // function showCategory () {
    
  // }

  function formatRelativeTime(createdAt) {
    const now = new Date();
    const diffInMilliseconds = now - new Date(createdAt);
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
  
    if (diffInSeconds < 60) {
      return `${diffInSeconds} seconds ago`;
    } else if (diffInSeconds < 3600) {
      const diffInMinutes = Math.floor(diffInSeconds / 60);
      return `${diffInMinutes} minutes ago`;
    } else if (diffInSeconds < 2592000) { // 30 days
      const diffInDays = Math.floor(diffInSeconds / 86400);
      return `${diffInDays} days ago`;
    } else if (diffInSeconds < 31536000) { // 365 days
      const diffInMonths = Math.floor(diffInSeconds / 2592000);
      return `${diffInMonths} months ago`;
    } else {
      const diffInYears = Math.floor(diffInSeconds / 31536000);
      return `${diffInYears} years ago`;
    }
  }
  
  useEffect(() => {
    getThreads();
    getUsers();
  }, []);

  return (
    <div className="App">
      <Header />

      <div className="comment">
        <div className="text-center">
          <div className="row align-items-start">
            <div className="section col column d-flex justify-content-evenly rounded-1 align-items-start">
              <a href="/"><i className="fa-solid fa-house"></i> Home</a>
              <a href="/leaderboard"><i className="fa-solid fa-chart-column"></i> Leaderboard</a>
              <a href="/add"><i class="fa-solid fa-square-plus"></i> Create Thread</a>
            </div>
            <div className="col-lg-8">
              {threads.map((thread, index) => (
                <div className="col" key={index}>
                  <div className="box-comment">
                    <div className="comment-header">
                      {users.map((user) => 
                        user.id === thread.ownerId ? (
                          <h1 className="fw-bold" key={user.id}>{user.name}</h1>
                        ) : null
                      )}
                      <p>{formatRelativeTime(thread.createdAt)}</p>
                    </div>
                    <Link to={`/detail/${thread.id}`}>
                    <h1 className="isikomen">{thread.title}</h1>
                    </Link>
                    <p>#{thread.category}</p>
                    <div className="icon">
                      <a href="/">
                        <i className="fa-regular fa-thumbs-up"></i>  
                      </a>
                      <a href="/">
                        <i className="fa-regular fa-comment-dots"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col column rounded-1">
              <div className="category">
                <p>Kategori</p>
                <div className="category-value"></div>
                {threads.map((thread) => (
                <p>#{thread.category}</p>
                ))} 
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Thread;
