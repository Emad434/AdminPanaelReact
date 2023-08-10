import { createContext, useLayoutEffect, useState } from "react";

const DrawerToggle = createContext();


const DrawerToggleProvider = ({ children }) => {

    const [Open, setOpen] = useState(window.innerWidth < 900 ? false : true)

    useLayoutEffect(() => {
        const onResizeEventListner = window.addEventListener('resize', () => {
            window.innerWidth < 900 ? setOpen(false) : setOpen(true);
        });
        return () => {
            removeEventListener('resize', onResizeEventListner);
        };
    }, []);

    const handleOpen = () => useState(true);

    const handleClose = () => setOpen(false);

    const handleToggle = () => setOpen(!Open);

    return (

        <DrawerToggle.Provider value={{ Open, DrawerOpen: handleOpen, DrawerClose: handleClose, DrawerToggle: handleToggle }} >
            {children}
        </DrawerToggle.Provider>
    )
}




export default DrawerToggle;

export {
    DrawerToggleProvider
}
