import { Avatar, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from "@mui/material"
import { memo, useState } from "react"
import SettingsIcon from '@mui/icons-material/Settings';
import SecurityIcon from '@mui/icons-material/Security';
import LoginRounded from '@mui/icons-material/LoginRounded';
import LogoutDialog from "./LogoutDialog";
import LocationOnIcon from '@mui/icons-material/LocationOn';

const AccountMenu = () => {

    const ProfileImage = 'profile_image/null';
    const [anchorEl, setAnchorEl] = useState(null);
    const [LogoutDialogOpen, setLogoutDialogOpen] = useState(false);
    const handleOpenLogoutDialog = () => setLogoutDialogOpen(true);
    const handleCloseLogoutDialog = () => setLogoutDialogOpen(false);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Tooltip title="Account Settings">
                <IconButton
                    sx={{ p: 0, display: 'block' }}
                    onClick={handleClick}
                    size="small"
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <Avatar sx={{ width: 40, height: 40 }}>
                        <img src={`${import.meta.env.VITE_API_DOMAIN}/api/image/${ProfileImage}`} alt="avatar" height={40} width={40} />
                    </Avatar>
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        "&:before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >

                <MenuItem>
                    <ListItemIcon>
                        <SettingsIcon fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>

                <MenuItem>
                    <ListItemIcon>
                        <LocationOnIcon fontSize="small" />
                    </ListItemIcon>
                    Mailzip Code
                </MenuItem>

                <MenuItem>
                    <ListItemIcon>
                        <SecurityIcon fontSize="small" />
                    </ListItemIcon>
                    Security
                </MenuItem>

                <MenuItem onClick={handleOpenLogoutDialog}>
                    <ListItemIcon>
                        <LoginRounded fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
            <LogoutDialog handleClose={handleCloseLogoutDialog} open={LogoutDialogOpen} />
        </>
    )
}

export default memo(AccountMenu)
