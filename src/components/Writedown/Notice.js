import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

export const useNotice = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [actionLabel, setActionLabel] = useState('');
  const [action, setAction] = useState({ fn: () => {} });

  const handleOpen = ({ action: newAction, actionLabel: newActionLabel, message: msg }) => {
    setMessage(msg);
    setActionLabel(newActionLabel);
    setAction({ fn: newAction });
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return {
    open,
    handleOpen,
    handleClose,
    message,
    actionLabel,
    action,
  };
};

const Notice = (props) => {
  const {
    open, handleClose, message, actionLabel, action,
  } = props;
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message={message}
      action={(
        <>
          <Button color="secondary" size="small" onClick={action.fn}>
            {actionLabel}
          </Button>
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
            <i className="fas fa-times" />
          </IconButton>
        </>
                )}
    />
  );
};

export default Notice;
