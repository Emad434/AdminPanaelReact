import { styled } from '@mui/system';
import React, { memo } from 'react';
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { InputBase } from '@mui/material';

const Wrapper = styled('div')(({ theme }) => ({
    border: '1px solid white',
    padding: '3px 10px 0 20px',
    width: 350,
    backgroundColor: theme.palette.background.default,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('lg')]: {
        display: 'none',
    },
    [theme.breakpoints.only('lg')]:{
        width:300
    },
}));

const Search = ({sx,value,onChange, ...props}) => {
    return (
        <Wrapper sx={sx}>
            <SearchRoundedIcon />
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ "aria-label": "search" }}
                value={value}
                onChange={onChange}
                {...props}
            />
        </Wrapper>
    )
}

export default memo(Search)
