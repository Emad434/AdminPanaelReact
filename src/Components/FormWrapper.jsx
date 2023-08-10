import React, { memo } from "react";
import PropTypes from 'prop-types'
import styled from "@mui/material/styles/styled";
import Typography from '@mui/material/Typography';
import { Button, CircularProgress, Grid, Box } from "@mui/material";

const Wrapper = styled(Box)(({ theme }) => ({
    width: 700,
    padding: 20,
    borderRadius: 5,
    backgroundColor: theme.palette.background.default,
    boxShadow: '0 0 10px rgba(0,0,0,.2)',
    [theme.breakpoints.down('md')]: {
        width: '100%',
        borderRadius: 0,
        boxShadow: 'none'
    }
}));

const InOrDownButton = ({ In, Down, children }) => {
    return children
}

const FormWrapper = (props) => {
    const { title, children, onSubmit, style, titleVariant = null, processing, btnText, gridSX, disabled } = props;
    return (
        <Wrapper>
            {
                title && <Typography variant={titleVariant ? titleVariant : 'h5'} sx={{ pb: 2, ...style }} component="h1">{title}</Typography>
            }
            <form onSubmit={onSubmit}>
                <Grid container spacing={1} rowGap={1} sx={gridSX ? gridSX : {}}>
                    {
                        Array.isArray(children) ? children.map((val) => (!val.props.In && !val.props.Down)
                            && val)
                            : (!children.props.In && !children.props.Down)
                            && children
                    }
                    <Grid item xs={12}>
                        <Button
                            fullWidth
                            variant="contained"
                            disabled={disabled !== undefined ? disabled : processing}
                            type="submit"
                        >
                            {processing ? (
                                <CircularProgress size={24} color="primary" />
                            ) : (
                                btnText
                            )}
                        </Button>
                        {
                            Array.isArray(children) ? children.map((val) => {
                                return (
                                    (val.props.In && !val.props.Down)
                                    && val
                                )
                            })
                                : (children.props.In && !children.props.Down)
                                && children
                        }
                    </Grid>
                    {
                        Array.isArray(children) ? children.map((val, ind) => (!val.props.In && val.props.Down)
                            && (
                                <Grid item xs={12} key={ind}>
                                    {val}
                                </Grid>
                            ))
                            : (!children.props.In && children.props.Down)
                            && (
                                <Grid item xs={12} key={ind}>
                                    {children}
                                </Grid>
                            )
                    }
                </Grid>
            </form>
        </Wrapper>
    )
}

FormWrapper.propTypes = {
    title: PropTypes.string,
    titleVariant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired,
    onSubmit: PropTypes.func.isRequired,
    processing: PropTypes.bool.isRequired,
    btnText: PropTypes.string.isRequired,
    style: PropTypes.object,
    gridSX: PropTypes.object
}

InOrDownButton.propTypes = {
    In: PropTypes.oneOf([true, false]),
    Down: PropTypes.oneOf([true, false])
}

export default memo(FormWrapper);
export { InOrDownButton }
