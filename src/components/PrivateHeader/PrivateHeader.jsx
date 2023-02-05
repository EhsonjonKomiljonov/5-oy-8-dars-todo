import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export const PrivateHeader = () => {
  const { setToken } = useContext(AuthContext);

  const logOut = () => {
    setToken("");
  };

  return (
    <header className="bg-dark py-3">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <Link className="fs-4 text-decoration-none text-white" to="/">
            TODO
          </Link>
          <button
            onClick={() => logOut()}
            className="btn btn-warning py-1 px-2"
          >
            Log out
          </button>
        </div>
      </div>
    </header>
  );
};
