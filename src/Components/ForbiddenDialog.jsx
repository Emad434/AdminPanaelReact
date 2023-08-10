import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useEffect, memo, useState } from 'react'

const ForbiddenDialog = ({open}) => {
    const [Open, setOpen] = useState(false);
    useEffect(()=>{
        if (open) {
            setOpen(true);
        }
    },[open]);
    const handleClose = () => setOpen(false);
    return (
        <Dialog
            open={Open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title" color="primary">
                Forbidden
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    You can not access Store Panel, Because you do not have permission, make
                    sure your permissions to access right panel
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} autoFocus>Close</Button>
            </DialogActions>
        </Dialog>
    )
}

export default memo(ForbiddenDialog);
