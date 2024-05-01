import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import React from "react";
import { DialogProps } from "../../../../types/dialog";

const AppDialog: React.VFC<DialogProps> = (options) => {
    return (
        <Dialog
            open={options.open}
            onClose={options.onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">
                NOT FOUND
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    The breed you are searching is not found on the server !
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" onClick={options.onClose} autoFocus>OK</Button>
            </DialogActions>
        </Dialog>
    )
};

export default AppDialog;