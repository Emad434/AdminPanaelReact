
import { Box, ListItem, ListItemButton, ListItemIcon, ListItemText, styled, Toolbar } from '@mui/material';
import { useContext } from 'react';
import { memo } from 'react';
import { drawerWidth } from '../../Constants';
import useDrawerToggle from '../../Hooks/useDrawerToggle';
// import LogoWithClose from './LogoWithClose';
import { HomeData, SettingData, SecurityData } from '../../Layouts/DrawerData';

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    width: 0
});

const Wrapper = styled('div', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    position: 'fixed',
    top: 80,
    left: 0,
    bottom: 0,
    backgroundColor: theme.palette.background.default,
    overflow: 'hidden',
    zIndex: theme.zIndex.drawer,
    [theme.breakpoints.down('md')]: {
        top: 0,
    },
    ...(open && openedMixin(theme)),
    ...(!open && closedMixin(theme)),
}));

const MenuList = (val, ind) => {

    return (

        <ListItem
            disablePadding
            sx={{
                position: 'relative',
                backgroundColor: URL === link && 'rgba(0,0,0,0.1)',
                width: drawerWidth,
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    height: '100%',
                    width: '3px',
                    backgroundColor: URL === link && 'primary.light'
                }
            }}
        >
            <ListItemButton sx={{ pl: '20px' }}>
                <ListItemIcon sx={{ color: URL === link && 'primary.light' }}>
                    {<val.icon />}
                </ListItemIcon>
                <ListItemText primary={val.title} sx={{ m: 0, color: URL === link && 'primary.light' }} />
            </ListItemButton>
        </ListItem>

    )
}

const Drawer = () => {

    const { Open } = useDrawerToggle();

    return (
        <Wrapper open={Open}>
            {/* <LogoWithClose /> */}
            <Toolbar variant='dense' />

            {/* <Link href={route('security.policy')} as='div'> */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '0',
                    backgroundColor: 'rgba(0,0,0,0.1)',
                    p: 1,
                    textAlign: 'center',
                    width: drawerWidth,
                    fontSize: '.9rem',
                    cursor: 'pointer',
                    zIndex: (theme) => theme.zIndex.drawer - 1,
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        height: '100%',
                        width: '3px',
                        // backgroundColor: url === '/security/policy' && 'primary.light'
                    }
                }}
            >
                Commission and Return Policy
            </Box>
            {/* </Link> */}
        </Wrapper>
    )
}

export default memo(Drawer);
