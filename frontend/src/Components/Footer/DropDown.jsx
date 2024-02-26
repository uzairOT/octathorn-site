import * as React from "react";
import { Grid, Button, Box, List, ListItem, li } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/AddCircleOutline";
import AddIcon from "@mui/icons-material/Add";
import { animateScroll as scroll } from "react-scroll";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  EmbeddedService,
  ErpService,
  IotService,
  MobileService,
  PcbService,
  ProductService,
  RDService,
  TechnicalService,
  WebService,
} from "../../Components/ServicesComponents/SecondServiceComps/ServiceData";
//
const serviceDataArray = [
  ProductService,
  EmbeddedService,
  IotService,
  RDService,
  PcbService,
  TechnicalService,
  WebService,
  MobileService,
  ErpService,
];

const serviceList = [
  "Product Development",
  "Embedded System",
  "IOT Platform",
  "Research & Development",
  "PCB",
  "Technical Consultation",
  "Web Applications",
  "Mobile Application",
  "ERP",
]

export default function ControlledAccordions({ techList, onItemClick }) {
  const [expanded, setExpanded] = React.useState(false);
  const navigate = useNavigate();
  // Initialize the index state variable to null
  const [index, setIndex] = useState(null);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const accordionSummaryStyle = {
    backgroundColor: "#0E4366",
  };
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "99%",

        background: "#0E4366",
        textAlign: "left",
        marginTop: "3.5rem",
        fontWeight: 400,
      }}
    >
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        AddIcon
      >
        <AccordionSummary
          expandIcon={<AddIcon style={{ color: "#ffff" }} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          style={accordionSummaryStyle}
        >
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              color: "#ffff",
              fontSize: "15px",
              fontWeight: 600,
              fontFamily: "Montserrat"
            }}
          >
            Services
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ backgroundColor: "#0E4366" }}>
          {serviceList.map((text) => (
            <Typography
              onClick={() => {
                const itemIndex = serviceList?.findIndex((serviceList) => serviceList === text);
                // Update the index state variable
                setIndex(itemIndex);
                // Use the index to get the corresponding service data
                const serviceData = serviceDataArray[itemIndex];

                const headingWithoutSpaces =
                  serviceData[0].ServiceHeading[0].replace(/\s/g, "").toLowerCase();
                navigate(`/services/${headingWithoutSpaces}`, {
                  state: serviceData,
                });
                scroll.scrollToTop({ duration: 2000 });

              }} sx={{
                color: "#ffff", fontSize: "0.85rem", marginTop: "0.3rem",
                fontFamily: "Inter"
              }}>{text}</Typography>
          ))}
        </AccordionDetails>
      </Accordion>
      <hr style={{ opacity: "10%" }} />
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        AddIcon
      >
        <AccordionSummary
          expandIcon={<AddIcon style={{ color: "#ffff" }} />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          style={accordionSummaryStyle}
        >
          <Typography
            sx={{
              width: "100%",
              // minWidth: "187px",
              flexShrink: 0,
              color: "#ffff",
              fontSize: "15px",
              fontWeight: 600,
              fontFamily: "Montserrat"
            }}
          >
            Technologies
          </Typography>
        </AccordionSummary>
        <Grid container >
          <Grid item xs={6}>
            <AccordionDetails sx={{ backgroundColor: "#0E4366", }}>
              {techList?.slice(0, 13)?.map((tech) => (
                <Typography onClick={() => { onItemClick(tech); scroll.scrollToTop({ duration: 2000 }); }} sx={{ color: "#ffff", fontSize: "0.85rem", marginTop: "0.3rem", fontFamily: "Inter" }}>{tech}</Typography>
              ))}
            </AccordionDetails>
          </Grid>
          <Grid item xs={6}>
            <AccordionDetails sx={{ backgroundColor: "#0E4366", }}>
              {techList?.slice(14, 27)?.map((tech) => (
                <Typography onClick={() => { onItemClick(tech); scroll.scrollToTop({ duration: 2000 }); }} sx={{ color: "#ffff", fontSize: "0.85rem", marginTop: "0.3rem", fontFamily: "Inter" }}>{tech}</Typography>
              ))}
            </AccordionDetails>
          </Grid>
        </Grid>
      </Accordion>
    </div>
  );
}
