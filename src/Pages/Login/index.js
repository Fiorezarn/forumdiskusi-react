import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Logo from "../../Assets/Icon/forum.svg";
import { Link } from "react-router-dom"; 

// style
import "./login.scss";

const useIndex = () => {
  return (
    <div classNameName="App">
      <Header />

      <div className="form-login col-4 column mx-auto">
      <img className="mx-auto" src={Logo} alt="Logo" />
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="register mb-3">
          <Link to="/register">Don't have an account? Register Now</Link>
        </div>
        <button type="submit" className="btn-submit">Login</button>
      </form>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default useIndex;
