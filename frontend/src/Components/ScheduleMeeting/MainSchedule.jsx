// import "./styles.css";
import { ScheduleMeeting } from "react-schedule-meeting";
import { useState, useEffect } from "react";
import axios from "axios";

import { Container } from "@mui/material";
import ConfirmSuccess from "./Modal";


const availableTimeslots = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
].map((id) => {
  return {
    id,
    startTime: new Date(
      new Date(new Date().setDate(new Date().getDate() + id)).setHours(
        9,
        0,
        0,
        0
      )
    ),
    endTime: new Date(
      new Date(new Date().setDate(new Date().getDate() + id)).setHours(
        17,
        0,
        0,
        0
      )
    ),
  };
});

const submit_data = async (first_name, email, start_date) => {
  const res = await axios.get("https://geolocation-db.com/json/");

  res.data.first_name = first_name;
  res.data.email = email;
  res.data.start_date = start_date.toString();
  console.log(res.data.start_date);

  //console.log(res.data);
  //setIP(res.data.IPv4);
  // emailjs.send("katjas_service_id_aaa", "template_yhw91kr", res.data).then(
  //   function (response) {
  //     console.log("SUCCESS!", response.status, response.text);
  //   },
  //   function (error) {
  //     console.log("FAILED...", error);
  //   }
  // );
};

export default function App(props) {
  const [first_name, set_first_name] = useState("");
  const [email, set_email] = useState("");
  const [description, set_description] = useState("");

  const [start_date, set_start_date] = useState(null); // Updated: Set initial value to null
  const [info_selected_active, set_info_selected_active] = useState(props);
  const [meetingLink, setMeetingLink] = useState("");

  useEffect(() => {
    if (first_name.trim() !== "" && email.trim() !== "" && start_date !== null) { // Updated: Check if all required fields are filled
      submit_data(first_name, email, start_date);
      set_info_selected_active(false);
    }
  }, [first_name, email, start_date]);

  const canOpenModal = () => {
    return first_name.trim() !== "" && email.trim() !== "" && start_date !== null; // Updated: Check if all required fields are filled

  };

  return (
    <div  style={{marginTop:'5rem'}}>
      <Container  sx={{mt:7}} >
      <ScheduleMeeting
        borderRadius={10}
        primaryColor="#3f5b85"
        eventDurationInMinutes={30}
        availableTimeslots={availableTimeslots}
        onStartTimeSelect={(e) => {
          set_start_date(e.startTime);
          set_info_selected_active(true);
        }}
      />
      {/* <Segment inverted> */}
        <div className="inline">
          <input
            inverted
            placeholder="Full Name"
            style={{
              margin: "2px",
              width: "50%",
              marginTop: "3px",
              height: "30px",
              borderRadius: "10px",
              border: "2px solid grey",
              padding: "4px",
            }}
            onChange={(e) => {
              set_first_name(e.target.value);
            }}
          />
          {/* <Input
            inverted
            placeholder="Last Name"
            style={{ margin: "2px" }}
            onChange={(e) => {
              set_last_name(e.target.value);
            }}
          /> */}
          <input
            inverted
            placeholder="Email"
            type="email"
            required
            style={{
              margin: "2px",
              marginTop: "3px",
              width: "50%",
              height: "30px",
              borderRadius: "10px",
              border: "2px solid grey",
              padding: "4px",
            }}
            onChange={(e) => {
              set_email(e.target.value);
            }}
          />
          <input
            inverted
            placeholder="Description"
            style={{
              marginTop: "3px",
              margin: "2px",
              width: "50%",
              height: "80px",
              borderRadius: "10px",
              border: "2px solid grey",
              padding: "4px",
              textAlign: "left",
              lineHeight: "normal",
              verticalAlign: "top",
              resize: "none",
              textIndent: "4px",
            }}
            onChange={(e) => {
              set_description(e.target.value);
            }}
          />
          <div style={{ marginTop: "20px", marginBottom: "5px" }}>
            <ConfirmSuccess
              canOpenModal={canOpenModal}
              submit_data={() => {
                submit_data(first_name, email, start_date);
              }}
              name={first_name}
              email={email}
              time={start_date?.toLocaleString()} // Updated: Format time as needed
            />
          </div>

          {/* <InformLogged
            info_selected_active={info_selected_active}
            set_info_selected_active={set_info_selected_active}
          /> */}
        </div>
      {/* </Segment>{" "} */}
      </Container>
    </div>
    
  );
}
