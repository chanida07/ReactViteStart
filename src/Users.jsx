import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

function Users() {

    let {title,description} = useContext(UsersContext)

    return (
        <div>
            The title is: {title}<br/>
            The description is: {description}
        </div>
    )
}

export default Users