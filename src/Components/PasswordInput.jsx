import React, { memo, useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import PropTypes from 'prop-types';

const PasswordInput = ({ label, name, value, handle, error, helperText, ...props }) => {
    const [PasswordVisibility, setPasswordVisibility] = useState(false);
    return (
        <TextField
            label={label}
            type={PasswordVisibility ? "text" : "password"}
            name={name}
            value={value}
            onChange={handle}
            error={error}
            helperText={helperText}
            fullWidth
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <Tooltip
                            title={
                                PasswordVisibility
                                    ? "Hide Password"
                                    : "Show Password"
                            }
                            arrow
                        >
                            <IconButton
                                size='small'
                                onMouseDown={() => setPasswordVisibility(true)}
                                onMouseUp={() => setPasswordVisibility(false)}
                            >
                                {PasswordVisibility ? (
                                    <VisibilityIcon fontSize='small' />
                                ) : (
                                    <VisibilityOffIcon fontSize='small' />
                                )}
                            </IconButton>
                        </Tooltip>
                    </InputAdornment>
                ),
            }}
            {...props}
        />
    )
}

PasswordInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handle: PropTypes.func.isRequired,
    error: PropTypes.bool.isRequired,
    helperText: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired
}

export default memo(PasswordInput);
