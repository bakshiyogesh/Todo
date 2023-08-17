import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {useState} from 'react';
const Edit=()=>{
    const [open, setOpen] =useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return(
    <div>
    {/* <Button onClick={handleOpen}>Open modal</Button> */}
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box>
tyoppe
      </Box>
    </Modal>
  </div>
 )
}
export default Edit;