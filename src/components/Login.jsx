import { useNavigate } from "react-router-dom";
import { getRequestToken } from "../movies/Movie";
import "./Login.css";

const Login = () => {
    const handleLogin = async () => {
        const token = await getRequestToken();
        console.log("NEW TOKEN:", token);
        window.location.href =
            `https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:5173/approved`;
    };

    return (
        <div className="login-wrapper">
            <div className="login-box">
                <h2>🎬 TMDB Login</h2>
                <p>Sign in with your TMDB account to rate and manage your movies.</p>
                <button onClick={handleLogin} className="login">
                    Login to TMDB
                </button>
            </div>
        </div>
    );
};

export default Login;