import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Logo from "../../Assets/Icon/forum.svg";
import { Link } from "react-router-dom"; 

// style
import "./register.scss";

const useIndex = () => {
  return (
    <div classNameName="App">
      <Header />

      <div className="form-login col-4 column mx-auto">
      <img className="mx-auto" src={Logo} alt="Logo" />
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Nama</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn-submit">Register</button>
      </form>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default useIndex;
