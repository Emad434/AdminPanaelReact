import styled from "@emotion/styled";
import { Box } from "@mui/material";

import { memo } from "react";
import { drawerWidth } from '../Constants';
import useDrawerToggle from "../Hooks/useDrawerToggle";


const openedMixin = (theme) => ({
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create('all', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('all', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    width: '100%',
    marginLeft: 0
});

const Wrapper = styled('div', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    marginTop: 80,
    ...(open && { ...openedMixin(theme) }),
    ...(!open && { ...closedMixin(theme) }),
    [theme.breakpoints.down('md')]: {
        width: '100%',
        marginLeft: 0,
    },

}));

const Section = ({ children }) => {
    const { Open } = useDrawerToggle()
    return (
        <Wrapper open={Open}>
            <Box sx={{ px: { xs: 0, md: 5 }, py: 5 }}>
                {children}
            </Box>
        </Wrapper>
    )
}

export default memo(Section)
