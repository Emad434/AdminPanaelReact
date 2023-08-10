import React, { memo, useContext } from 'react'
import { Box, IconButton, Tooltip } from '@mui/material';
import Search from '../Search';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import AccountMenu from './AccountMenu';
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import useDrawerToggle from '../../Hooks/useDrawerToggle';

const Navigation = () => {
    const { Open, DrawerToggle } = useDrawerToggle();

    return (
        <Box sx={{ display: 'flex', pr: 3 }}>
            <Tooltip title={`Drawer ${Open ? 'Close' : 'Open'}`}>
                <Box
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        backgroundColor: "background.paper",
                        borderRadius: "50%",
                        mr: 2
                    }}
                >
                    <IconButton
                        onClick={DrawerToggle}
                        color="primary"
                    >
                        <MenuRoundedIcon />
                    </IconButton>
                </Box>
            </Tooltip>
            <Search />
            <Tooltip title="Home">

                <Box
                    sx={{
                        backgroundColor: "background.paper",
                        borderRadius: "50%",
                        mr: 2
                    }}
                >
                    <IconButton color="primary">
                        <HomeIcon />
                    </IconButton>
                </Box>

            </Tooltip>
            <Tooltip title="Notification">
                <Box
                    sx={{
                        backgroundColor: "background.paper",
                        borderRadius: "50%",
                        mr: 2
                    }}
                >
                    <IconButton color="primary">
                        <NotificationsRoundedIcon />
                    </IconButton>
                </Box>
            </Tooltip>
            <AccountMenu />
        </Box>
    )
}

export default memo(Navigation)
