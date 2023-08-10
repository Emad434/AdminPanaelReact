import { memo } from "react"
import AppBar from "../Components/AppBar/AppBar"
import Drawer from "../Components/Drawer/Drawer"
import { Outlet } from "react-router-dom"


const AuthLayout = () => {
    return (
        <>
            <AppBar />
            <Drawer />
            <Outlet />
        </>

    )
}

export default memo(AuthLayout)