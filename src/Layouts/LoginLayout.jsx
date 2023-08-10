import { Outlet } from "react-router-dom"
import FullPageCenteredWrapper from "../Components/FullPageCenteredWrapper"

const LoginLayout = () => {
    return (

        <FullPageCenteredWrapper >
            <Outlet />
        </FullPageCenteredWrapper>


    )
}

export default LoginLayout  