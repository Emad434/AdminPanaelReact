import { useContext } from "react"
import DrawerToggle from "../Context/DrawerToggle";


const useDrawerToggle = () => {

    const context = useContext(DrawerToggle);

    if (!context) {
        throw new Error('Context Not found')
    }

    return (
        context
    )
}

export default useDrawerToggle