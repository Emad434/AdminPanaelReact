import { IconButton, styled } from '@mui/material';
import { Box } from '@mui/system';
import React, { memo } from 'react'
import { drawerWidth } from '../../Constants';
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import useDrawerToggle from '../../Hooks/useDrawerToggle';


const Wrapper = styled('div')(({ theme }) => ({
    width: drawerWidth,
    borderRight: `1px solid ${theme.palette.background.default}`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
        width: 100,
        borderRight: 'none'
    }
}))

const LogoWithMdToggle = () => {
    const { DrawerToggle } = useDrawerToggle();
    return (
        <Wrapper>
            <IconButton
                onClick={DrawerToggle}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{
                    ml: 1,
                    display: { xs: 'none', md: 'flex' }
                }}
            >
                <MenuRoundedIcon fontSize="inherit" />
            </IconButton>
            <Box sx={{ mr: 1, ml: { xs: 1, md: 0 } }}>
                <img src={`${import.meta.env.VITE_API_DOMAIN}/api/image/images/logo.png`} alt="Logo" height={60} />
            </Box>
        </Wrapper>
    )
}

export default memo(LogoWithMdToggle);
