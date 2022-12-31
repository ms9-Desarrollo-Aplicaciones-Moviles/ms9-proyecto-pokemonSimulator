import React from "react";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AppContext } from "./Components/Context/AppContext";

export const Navigation = () => {
    const {region} = useContext(AppContext);
    console.log(region)
    return (
        <>
        <Outlet> </Outlet>
        </>
    );
}