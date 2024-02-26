import React from "react";
import { Button, Modal, Box, Typography } from "@mui/material";
import FilledButton from "../UI/Buttons/FilledButton";
import { useNavigate } from "react-router-dom";
function ConfirmSuccess(props) {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleOpen = () => {

    if (props.canOpenModal()) {
      console.log(props);
      setOpen(true);
      props.submit_data();

      // Call the API
      fetch('https://octathorn.com/api/schedule', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(props)
      })
        .then(response => response.json())
        .then(data => {
          // Handle the API response here
          console.log(data);
          navigate("/");

        })
        .catch(error => {
          // Handle any errors here
          console.error(error);
        });
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button
        style={{
          width: "120px",
          borderRadius: "20px",
          padding: "2px",
          border: "2px solid black",
          color: "black"
        }}
        onClick={handleOpen}
      >
        Schedule Meeting
      </Button> */}
      <FilledButton text={'Schedule Meeting'} onClick={handleOpen} />


      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="p" component="h2">
            Meeting Scheduled
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Your meeting has been scheduled successfully. If you wish to
            reschedule the meeting, go back and select another slot.
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Name: {props.name}, Email: {props.email}, Time: {props.time}
          </Typography>
          <Typography sx={{ mt: 2 }}>Looking forward to meeting you.</Typography>
          {/* <Button onClick={handleClose} sx={{ mt: 2 }} variant="contained">
            Okay
          </Button> */}
          <FilledButton text={'Okay'} onClick={handleClose} sx={{ mt: 2 }} />

        </Box>
      </Modal>
    </div>
  );
}

export default ConfirmSuccess;
