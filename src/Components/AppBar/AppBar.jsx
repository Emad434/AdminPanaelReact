import { memo } from 'react';
import { styled } from '@mui/material';
import LogoWithMdToggle from './LogoWithMdToggle';
import SellerNameWithWishAndQuote from './SellerNameWithWishAndQuote';
import Navigation from './Navigation';
import { appBarHeight } from '../../Constants';

const Wrapper = styled('div')(({ theme }) => ({
    height: appBarHeight,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    display: 'flex',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: theme.zIndex.drawer - 2,
}));

const NavigationAndWishWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
        justifyContent: 'flex-end'
    },
    [theme.breakpoints.down('sm')]: {
        justifyContent: 'center'
    }
}));

const AppBar = () => {
    return (
        <Wrapper>
            <LogoWithMdToggle />
            <NavigationAndWishWrapper>
                <SellerNameWithWishAndQuote />
                <Navigation />
            </NavigationAndWishWrapper>
        </Wrapper>
    )
}

export default memo(AppBar)
