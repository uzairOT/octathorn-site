import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/AddCircleOutline';
import { Container } from '@mui/material';
export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const accordionSummaryStyle = {
    backgroundColor: '#F6F6F6',
   // border: '1px solid',
  //  borderColor: '#1B2231',
  
  };

  return (
    <Container style={{ border: 'none', background:'#F6F6F6', textAlign:'left',fontWeight:400}}>
        <Typography  component="h5" style={{color: '#1B2231', fontSize:{lg:'2.5rem',md:'2rem',sm:'1.5rem',xs:'1.2rem'}, fontWeight:600, textAlign:'center', padding:'20px 0px 20px 0px'}}>Frequently Asked Questions{"(FAQ's)"}</Typography>
        <Typography style={{color: '#545454', fontSize:{lg:'1rem',sm:'0.8rem',xs:'0.75rem'}, fontWeight:400, textAlign:'center', padding:'20px 0px 20px 0px',marginTop:'1%'}}>See the answer to some of our most commonly asked questions below.</Typography>

      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} x>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'#1B2231'}}/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          style={accordionSummaryStyle}
        >
        
          <Typography sx={{ width: '90%', flexShrink: 0 ,color:'#1B2231',  fontSize:{lg:'1.12rem',sm:'1rem',xs:'0.8rem'},fontFamily:"Inter",  }}>
          Best Quality
          </Typography>
        
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor:'#F6F6F6',}}>
          <Typography sx={{color: '#1B2231', fontSize: {lg:"1rem",sm:"1rem",xs:"0.8rem"}, fontFamily:"Inter", }}>
           At Octathorn, we deliver unparalleled quality through a team of experienced professionals, rigorous testing protocols, and the use of cutting-edge technologies.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'#1B2231'}}/>}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          style={accordionSummaryStyle}
        >
          <Typography sx={{ width: '90%', flexShrink: 0 ,color: '#1B2231',  fontSize:{lg:'1.12rem',sm:'1rem',xs:'0.8rem'},fontFamily:"Inter",}}>24 x 7 Live Support</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor:'#F6F6F6'}}>
          <Typography sx={{color: '#1B2231', fontSize: {lg:"1rem",sm:"1rem",xs:"0.8rem"}, fontFamily:"Inter"}}>
           At Octathorn, we offer 24x7 live support to ensure that our clients receive immediate assistance whenever they need it. Our dedicated support team is available around the clock, ready to address inquiries, provide technical assistance, and ensure uninterrupted service to enhance your experience with our products and solutions. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'#1B2231'}}/>}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          style={accordionSummaryStyle}
        >
          <Typography sx={{ width: '90%', flexShrink: 0,color: '#1B2231',  fontSize:{lg:'1.12rem',sm:'1rem',xs:'0.8rem'},fontFamily:"Inter", }}>
          Result Oriented Projects
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor:'#F6F6F6'}}>
          <Typography sx={{color: '#1B2231', fontSize: {lg:"1rem",sm:"1rem",xs:"0.8rem"}, fontFamily:"Inter"}}>
            Our approach at Octathorn is focused on delivering result-oriented projects. We prioritize strategic planning, efficient execution, and continuous evaluation to ensure that our projects not only meet but exceed client expectations. Count on us to drive tangible and impactful outcomes in every endeavor.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'#1B2231'}}/>}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          style={accordionSummaryStyle}
        >
          <Typography sx={{ width: '90%', flexShrink: 0,color: '#1B2231',  fontSize:{lg:'1.12rem',sm:'1rem',xs:'0.8rem'},fontFamily:"Inter", }}>Award Winning support</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor:'#F6F6F6'}}>
          <Typography sx={{color: '#1B2231', fontSize: {lg:"1rem",sm:"1rem",xs:"0.8rem"}, fontFamily:"Inter"}}>
           Experience award-winning support at Octathorn. Our dedicated support team has been recognized for excellence, providing unparalleled assistance to ensure your satisfaction. Count on us for top-tier customer service that goes above and beyond expectations.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'#1B2231'}}/>}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          style={accordionSummaryStyle}
        >
          <Typography sx={{ width: '90%', flexShrink: 0 ,color: '#1B2231',  fontSize:{lg:'1.12rem',sm:'1rem',xs:'0.8rem'},fontFamily:"Inter",}}>Best RDI Techniques</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor:'#F6F6F6'}} >
          <Typography sx={{color: '#1B2231', fontSize: {lg:"1rem",sm:"1rem",xs:"0.8rem"}, fontFamily:"Inter"}}>
           At Octathorn, we employ cutting-edge Research and Development and Innovation (RDI) techniques to drive excellence. Our approach includes continuous exploration of emerging technologies, in-depth market analysis, and collaborative ideation sessions. By fostering a culture of innovation, we ensure the adoption of the best RDI techniques to create groundbreaking solutions for our clients.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'#1B2231'}}/>}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          style={accordionSummaryStyle}
        >
          <Typography sx={{ width: '90%', flexShrink: 0 ,color: '#1B2231',  fontSize:{lg:'1.12rem',sm:'1rem',xs:'0.8rem'},fontFamily:"Inter",}}>Experienced Professionals</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor:'#F6F6F6'}}>
          <Typography sx={{color: '#1B2231', fontSize: {lg:"1rem",sm:"1rem",xs:"0.8rem"}, fontFamily:"Inter"}}>
           At Octathorn, our team is comprised of highly experienced professionals. With a wealth of expertise in their respective fields, our professionals bring a deep understanding of industry trends and best practices. Trust in our seasoned team to deliver solutions that reflect the pinnacle of experience and proficiency.
          </Typography>
        </AccordionDetails>
      </Accordion>


  <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'#1B2231'}}/>}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          style={accordionSummaryStyle}
        >
          <Typography sx={{ width: '90%', flexShrink: 0 ,color: '#1B2231',  fontSize:{lg:'1.12rem',sm:'1rem',xs:'0.8rem'},fontFamily:"Inter",}}>What are the key features of your product development services?</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor:'#F6F6F6'}}>
          <Typography sx={{color: '#1B2231', fontSize: {lg:"1rem",sm:"1rem",xs:"0.8rem"}, fontFamily:"Inter"}}>
           Our product development services encompass a wide range of features, including innovative ideation, rapid prototyping, and seamless integration. We prioritize client needs to deliver cutting-edge solutions.
          </Typography>
        </AccordionDetails>
      </Accordion>


        
  <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'#1B2231'}}/>}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          style={accordionSummaryStyle}
        >
          <Typography sx={{width: '90%', flexShrink: 0 ,color: '#1B2231',  fontSize:{lg:'1.12rem',sm:'1rem',xs:'0.8rem'},fontFamily:"Inter",}}>How does your company specialize in embedded systems development?</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor:'#F6F6F6'}}>
          <Typography sx={{color: '#1B2231', fontSize: {lg:"1rem",sm:"1rem",xs:"0.8rem"}, fontFamily:"Inter"}}>
           Our expertise in embedded systems development lies in creating efficient, reliable, and scalable solutions for diverse industries. We focus on optimizing performance and minimizing footprint for embedded applications.
          </Typography>
        </AccordionDetails>
      </Accordion>


     
  <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'#1B2231'}}/>}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          style={accordionSummaryStyle}
        >
          <Typography sx={{ width: '90%', flexShrink: 0 ,color: '#1B2231',  fontSize:{lg:'1.12rem',sm:'1rem',xs:'0.8rem'},fontFamily:"Inter",}}>Can you elaborate on your IoT platform development services?</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor:'#F6F6F6'}}>
          <Typography sx={{color: '#1B2231', fontSize: {lg:"1rem",sm:"1rem",xs:"0.8rem"}, fontFamily:"Inter"}}>
          We excel in crafting customized IoT platforms, ensuring seamless connectivity and data management. Our solutions empower businesses to harness the potential of the Internet of Things for enhanced efficiency and productivity.
          </Typography>
        </AccordionDetails>
      </Accordion>


        
  <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'#1B2231'}}/>}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          style={accordionSummaryStyle}
        >
          <Typography sx={{ width: '90%', flexShrink: 0 ,color: '#1B2231',  fontSize:{lg:'1.12rem',sm:'1rem',xs:'0.8rem'},fontFamily:"Inter",}}>What sets your research and development services apart?</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor:'#F6F6F6'}}>
          <Typography sx={{color: '#1B2231', fontSize: {lg:"1rem",sm:"1rem",xs:"0.8rem"}, fontFamily:"Inter"}}>
         Our research and development services go beyond conventional boundaries, leveraging the latest technologies to solve complex problems. We are dedicated to fostering innovation and staying ahead of industry trends.
          </Typography>
        </AccordionDetails>
      </Accordion>

       
  <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'#1B2231'}}/>}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          style={accordionSummaryStyle}
        >
          <Typography sx={{ width: '90%', flexShrink: 0 ,color: '#1B2231',  fontSize:{lg:'1.12rem',sm:'1rem',xs:'0.8rem'},fontFamily:"Inter",}}>How does your PCB development service ensure quality and reliability?</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor:'#F6F6F6'}}>
          <Typography sx={{color: '#1B2231', fontSize: {lg:"1rem",sm:"1rem",xs:"0.8rem"}, fontFamily:"Inter"}}>
Our PCB development services guarantee top-notch quality and reliability. We employ advanced design and testing techniques to deliver PCB solutions that meet the highest industry standards.          </Typography>
        </AccordionDetails>
      </Accordion>

     
  <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'#1B2231'}}/>}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          style={accordionSummaryStyle}
        >
          <Typography sx={{ width: '90%', flexShrink: 0 ,color: '#1B2231',  fontSize:{lg:'1.12rem',sm:'1rem',xs:'0.8rem'},fontFamily:"Inter",}}>What does your technical consultation service involve?</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor:'#F6F6F6'}}>
          <Typography sx={{color: '#1B2231', fontSize: {lg:"1rem",sm:"1rem",xs:"0.8rem"}, fontFamily:"Inter"}}>
Our technical consultation service provides comprehensive guidance on leveraging technology for business growth. We analyze your specific needs and challenges, offering tailored recommendations for sustainable success.
 </Typography>
        </AccordionDetails>
      </Accordion>




  <Accordion expanded={expanded === 'panel13'} onChange={handleChange('panel13')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'#1B2231'}}/>}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          style={accordionSummaryStyle}
        >
          <Typography sx={{ width: '90%', flexShrink: 0 ,color: '#1B2231',  fontSize:{lg:'1.12rem',sm:'1rem',xs:'0.8rem'},fontFamily:"Inter",}}>How do your web development services enhance online presence?</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor:'#F6F6F6'}}>
          <Typography sx={{color: '#1B2231', fontSize: {lg:"1rem",sm:"1rem",xs:"0.8rem"}, fontFamily:"Inter"}}>
Our web development services focus on creating responsive, user-friendly websites that enhance online visibility. We utilize the latest technologies to deliver websites that engage users and drive business results.
 </Typography>
        </AccordionDetails>
      </Accordion>


      
  <Accordion expanded={expanded === 'panel14'} onChange={handleChange('panel14')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'#1B2231'}}/>}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          style={accordionSummaryStyle}
        >
          <Typography sx={{ width: '90%', flexShrink: 0 ,color: '#1B2231',  fontSize:{lg:'1.12rem',sm:'1rem',xs:'0.8rem'},fontFamily:"Inter",}}>What sets your mobile development services apart in today's competitive market?</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor:'#F6F6F6'}}>
          <Typography sx={{color: '#1B2231', fontSize: {lg:"1rem",sm:"1rem",xs:"0.8rem"}, fontFamily:"Inter"}}>
Our mobile development services prioritize user experience and functionality. We develop cross-platform mobile applications that cater to diverse audiences, ensuring a seamless and intuitive mobile experience.
 </Typography>
        </AccordionDetails>
      </Accordion>



     
  <Accordion expanded={expanded === 'panel15'} onChange={handleChange('panel15')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'#1B2231'}}/>}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          style={accordionSummaryStyle}
        >
          <Typography sx={{ width: '90%', flexShrink: 0 ,color: '#1B2231',  fontSize:{lg:'1.12rem',sm:'1rem',xs:'0.8rem'},fontFamily:"Inter",}}>How does your company approach enterprise resource planning (ERP) solutions?</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor:'#F6F6F6'}}>
          <Typography sx={{color: '#1B2231', fontSize: {lg:"1rem",sm:"1rem",xs:"0.8rem"}, fontFamily:"Inter"}}>
Our ERP solutions are tailored to streamline business processes, enhance efficiency, and facilitate data-driven decision-making. We customize ERP systems to meet the unique needs of each client's business.
 </Typography>
        </AccordionDetails>
      </Accordion>






       



      














    </Container>
  );
}
