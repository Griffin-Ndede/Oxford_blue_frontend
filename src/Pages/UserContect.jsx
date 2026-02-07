import { createContext, useState } from "react";


const UserContext = createContext()

export const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState("")
    function login() {
        const username = prompt("Enter your username")
        setUser(username)
    }
    return (

        <UserContext.Provider value={{ user, login }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext