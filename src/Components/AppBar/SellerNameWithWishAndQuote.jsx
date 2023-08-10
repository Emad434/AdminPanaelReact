
import { styled, Typography } from '@mui/material';
import { memo, useEffect, useState } from 'react';

const Wrapper = styled('div')(({ theme }) => ({
    paddingLeft: theme.spacing(3),
    height: '100%',
    display: 'flex',
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingBottom: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const SellerNameWithWishAndQuote = () => {

    const [Hours, setHours] = useState(new Date().getHours());
    useEffect(() => {
        const dateInterVal = setInterval(() => {
            setHours(new Date().getHours());
        }, 60000);

        return () => {
            clearInterval(dateInterVal);
        };
    }, [])
    return (
        <Wrapper>
            <Typography variant='h5' component="h1" sx={{ fontSize: "1.75rem" }}>
                {
                    (
                        Hours >= 3 && Hours < 12
                            ? "Good Morning"
                            : Hours >= 12 && Hours < 17
                                ? "Good Afternoon"
                                : Hours >= 17 && Hours < 21
                                    ? "Good Evening"
                                    : "Good Night"
                    ) + " " + "Welcome" + ""
                }
            </Typography>
            <Typography>
                What we do today is what matters most
            </Typography>
        </Wrapper>
    )
}

export default memo(SellerNameWithWishAndQuote)
