import { UserContext } from "../context/UserContext"


export const UserProvider = ({children}) => {

    // global state for react.js app

    let title = "SAMPLE CRUD APP"
    let description = "This is the description"
    return (
        <UserContext.Provider value={{title,description}}>
            {children}
        </UserContext.Provider>
    )

}