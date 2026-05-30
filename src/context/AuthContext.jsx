import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [sessionId, setSessionId] = useState(null);
    const [accountId, setAccountId] = useState(null);




    useEffect(() => {
        const session = localStorage.getItem("session_id");
        const account = localStorage.getItem("account_id");
        setSessionId(session);
        setAccountId(account);
        console.log(session); // ✅ log the variable directly
        console.log(account);

    }, []);
    const login = (session, account) => {
        localStorage.setItem("session_id", session);
        localStorage.setItem("account_id", account);

        setSessionId(session);
        setAccountId(account);

    };

    const logout = () => {
        localStorage.clear();
        setSessionId(null);
        setAccountId(null);
    };

    return (
        <AuthContext.Provider
            value={{
                sessionId,
                accountId,
                login,
                logout,
                isLoggedIn: !!sessionId
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);