import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  CircularProgress,
  MenuItem,
  Select,
} from '@material-ui/core';

export default function AddViewDialog(props) {
  return (
    <Dialog
      open={props.open}
      onClose={props.closeDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth={'lg'}
    >
      <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
      <DialogContent style={{ width: 400 }}>
        <div class="dialog-input">
          <Select
            displayEmpty
            onChange={(e) => props.setCollection(e.target.value)}
            style={{ width: '100%' }}
          >
            {props.collectionArr.map((value) => {
              return <MenuItem value={value}>{value}</MenuItem>;
            })}
          </Select>
        </div>
        <div class="dialog-input">
          <input
            value="Position generated on publish"
            readonly
            style={{ width: '97%' }}
          />
        </div>
        <div class="dialog-input">
          <input
            placeholder="Enter view name here"
            type="text"
            style={{ width: '97%' }}
            onChange={(e) => props.setName(e.target.value)}
          />
        </div>
        <div class="dialog-input">
          <input
            placeholder="Enter description here"
            type="text"
            style={{ width: '97%' }}
            onChange={(e) => props.setDescription(e.target.value)}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.action} color="primary" autoFocus>
          {props.actionProcess && <CircularProgress size={24} />}
          {!props.actionProcess && 'Add'}
        </Button>
        <Button onClick={props.closeDialog} color="primary" autoFocus>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
