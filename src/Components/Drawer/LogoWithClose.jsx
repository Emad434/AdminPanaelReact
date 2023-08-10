import { Box, IconButton, styled } from '@mui/material';
import { memo, useContext } from 'react'
import { appBarHeight } from '../../Constants';
import DrawerToggleContext from '../../Context/DrawerToggleContext';
import CloseIcon from '@mui/icons-material/Close';

const Wrapper = styled('div')(({ theme }) => ({
    height: appBarHeight,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.up('md')]:{
        display:'none'
    }
}));

const LogoWithClose = () => {
    const {handleToggle} = useContext(DrawerToggleContext);
    return (
        <Wrapper>
            <IconButton
                onClick={handleToggle}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{
                    ml: 1,
                }}
            >
                <CloseIcon fontSize="inherit" />
            </IconButton>
            <Box sx={{ mr: 1, ml: { xs: 1, md: 0 } }}>
                <img src={`${import.meta.env.VITE_API_DOMAIN}/api/image/images/logo.png`} height={60} />
            </Box>
        </Wrapper>
    )
}

export default memo(LogoWithClose);
