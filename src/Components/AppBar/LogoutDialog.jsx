import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { memo } from 'react'

const LogoutDialog = ({ handleClose, open }) => {
    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Logout</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are You sure you want to logout
                </DialogContentText>
                <DialogActions>

                    <Button variant="outlined">Logout</Button>

                    <Button variant='contained' sx={{ ml: 2 }} onClick={() => handleClose()}>no</Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    )
}

export default memo(LogoutDialog);
