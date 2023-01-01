import React from "react";
import { UserContext } from "../App";

const Username = () => {
    const valor = React.useContext(UserContext);
    return <h1>{valor}</h1>
}

export default Username;