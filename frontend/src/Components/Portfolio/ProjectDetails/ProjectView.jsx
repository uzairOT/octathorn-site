
import { Typography } from "@mui/material";
import PorjectDetailsMain from "../ProjectDetails/PorjectDetailsMain";
import FeatureList from "./FeatureList";
import EngagementModel from "../../EngagementModel/EngagementModel";
import ContactProject from "../../ContactUs/ContactProject";
import ProjectOverview from "./ProjectOverview";


const data = {
    title: "Battery System",
    description: "Introducing PowerHub Pro, the ultimate battery system that ensures a constant and reliable power source for your devices. This innovative system is a dedicated board equipped with multiple batteries and battery chargers, sharing a single output to guarantee an uninterrupted power supply. PowerHub Pro can accommodate up to eight different batteries, charging them simultaneously while drawing power from just one. The system's OLED screen provides a comprehensive status overview for each battery, ensuring you have complete control and visibility over your power setup.    ",
    image: "https://picsum.photos/200/300",
    github: "",
}
function ProjectView(){
    return(
        <>
    <PorjectDetailsMain data={data}/>
   <ProjectOverview/>
   <div style={{marginTop:'5%'}}>
    <FeatureList/>
    </div>
    <EngagementModel/>
    <ContactProject/>

        </>
    )
}
export default ProjectView;