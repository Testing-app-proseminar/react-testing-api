import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav>
      <div>
        <Link to="/">
          <button>Home</button>
        </Link>

        {isLoggedIn && (
          <>
            <Link to="/cards">
              <button>Study Cards</button>
            </Link>
            <button onClick={logOutUser}>Logout</button>
            <span>{user && user.email}</span>
          </>
        )}

        {!isLoggedIn && (
          <>
            <Link to="/cards">
              <button>Study Cards</button>
            </Link>
            <Link to="/signup">
              <button>Signup</button>
            </Link>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
