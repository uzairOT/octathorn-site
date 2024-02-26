import ProjectDetail from "../Components/Portfolio/ProjectDetail";
import EngagementModel from "../Components/EngagementModel/EngagementModel"
import WhyClientsChooseUs from "../Components/WhyClientsChooseUs/WhyClientsChooseUs";
import { Box, Container } from "@mui/system";
import { useLocation } from 'react-router-dom';
import ContactProject from "../Components/ContactUs/ContactProject";
import ProjectOverview from "../Components/Portfolio/ProjectDetails/ProjectOverview";
import FeatureList from "../Components/Portfolio/ProjectDetails/FeatureList";
import PorjectDetailsMain from "../Components/Portfolio/ProjectDetails/PorjectDetailsMain";
import ControlledAccordions from "../Components/UI/Accordion/ControlledAccordion";
import ContactRefer from "../Components/ContactUs/ContactRefer";
function ProjectDetails() {
  const location = useLocation();
  const project = location.state.project;
  return (
    <Box

      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      position="relative"
      sx={{ backgroundColor: "#F6F6F6", mt: 3, contain: { xs: "content", sm: 'none' } }}

    >
      <Container
        maxWidth="false"
        sx={{ padding: { xs: "1.125rem 2.5rem", sm: "1.125rem 2.5rem", lg: "1.125rem 2.5rem" } }}

      >
        {/* <ProjectDetail project={project} /> */}
        <PorjectDetailsMain project={project} />
        <div id="overview">
          <ProjectOverview project={project} />
        </div>
        <div id="feature-list" style={{ marginTop: '5%' }}>
          <FeatureList project={project} />
        </div>

        <div id="engagement-model" style={{ marginTop: '5%' }}>
          <EngagementModel />
        </div>

        <div id="faqs" style={{ marginTop: '5%' }}>
          <ControlledAccordions />
        </div>

        <div id="contact-us" style={{ marginTop: '8%', backgroundColor: "#FFF", marginLeft: "-2rem", marginRight: "-2rem", marginBottom: "-1rem" }}>
          <ContactRefer />
        </div>


      </Container>
    </Box>
  );
}

export default ProjectDetails;