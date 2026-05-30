import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { createSession } from "../movies/Movie";
import axios from "axios";

const Approved = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    // ApprovedPage.jsx
    useEffect(() => {
        const handleAuth = async () => {
            try {
                const token = new URLSearchParams(window.location.search)
                    .get("request_token");
                

                const sessionId = await createSession(token);
              

                // Add this log
                // ✅ Correct
                const res = await axios.get(
                    `https://api.themoviedb.org/3/account?session_id=${sessionId}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`
                );
                const data = res.data; // ✅
                

                login(sessionId, data.id);
                

                navigate("/");
            } catch (err) {
                console.log("ERROR:", err); // ← check error
                navigate("/login");
            }
        };
        handleAuth();
    }, []);

    return <h2>Logging in...</h2>;
};

export default Approved;