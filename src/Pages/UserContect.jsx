import { createContext, useState } from "react";


const UserContext = createContext()

export const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState("John Doe")
    function login() {
        alert("Logged in")
    }
    return (

        <UserContext.Provider value={{ user, login }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext