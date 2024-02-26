import React from "react";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import { animateScroll as scroll } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";
import {
  EmbeddedTech,
  MobTech,
  FrontEndTech,
  BackEndTech,
  IotTech,
  PcbTech,
  DatabaseTech,
} from "../../Components/Technologies/TechnologyData";

const TechList = ({ techList, onItemClick }) => {
  const isMediumScreen = useMediaQuery("(min-width:1100px)");
  const isLargeScreen = useMediaQuery("(min-width:1200px)");

  const columns = isMediumScreen ? (isLargeScreen ? 2 : 1) : 3;

  const renderTechList = () => {
    const techLists = [];
    const itemsPerColumn = Math.ceil(techList.length / columns);
    for (let i = 0; i < columns; i++) {
      techLists.push(
        <Grid item key={i} xs={12 / columns}>
          <List
            sx={{
              listStyleType: "none",
              opacity: "70%",
              gap: "12px",
              display: "flex",
              fontFamily: "Inter",
              fontWeight: "400",
              fontSize: "16px",
              alignItems: "start",
              flexDirection: "column",
              whiteSpace: "nowrap",
            }}
          >
            {techList
              .slice(i * itemsPerColumn, (i + 1) * itemsPerColumn)
              .map((tech, index) => (
                <li
                  key={index}
                  onClick={() => {
                    onItemClick(tech)
                    scroll.scrollToTop({ duration: 1000 });
                  }}
                  style={{ cursor: "pointer" }}
                >
                  {tech}
                </li>
              ))}
          </List>
        </Grid>
      );
    }
    return techLists;
  };

  return (
    <Grid container spacing={2} color={"#ffffff"}>
      {renderTechList()}
    </Grid>
  );
};

export default TechList;
