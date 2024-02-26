// import React from "react";
// import { Grid, Box } from "@mui/material";
// import FilledButton from "../Buttons/FilledButton";

// const images = [
//   "https://i.postimg.cc/W3twcmPz/Group-533.png",
//   "https://i.postimg.cc/2jJywsjg/Asset-8.png",
//   "https://i.postimg.cc/W3twcmPz/Group-533.png",
//   "https://i.postimg.cc/52P2XTrP/Asset-12-1.png",
//   "https://i.postimg.cc/W3twcmPz/Group-533.png",
//   "https://i.postimg.cc/52P2XTrP/Asset-12-1.png",
//   "https://i.postimg.cc/s2XY4TQX/258s-removebg-preview-1.png",
//   "https://i.postimg.cc/W3twcmPz/Group-533.png",
//   "https://i.postimg.cc/52P2XTrP/Asset-12-1.png",
//   "https://i.postimg.cc/s2XY4TQX/258s-removebg-preview-1.png",
// ];

// const AutoImageSlider = () => {
//   return (
//     <Grid container justifyContent="center" >
//       <Grid item xs={12} md={10} lg={10}>
//         <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
//           {images.map((image, i) => (
//             <Box
//               component="img"
//               src={image}
//               alt={`Company Logo ${i + 1}`}
//               sx={{
//                 width: { md: "9.4375rem", lg: "9.4375rem", sm: "7.1876rem", xs: "7.1876rem" },
//                 height: { lg: "9.4375rem", md: "9.4375rem", sm: "7.1876rem", xs: "7.1876rem" },
//                 objectFit: "contain",
//                 padding: "1rem",
//                 display: "inline-block",
//                 animation: "marquee 5s linear infinite",
//                 "@keyframes marquee": {
//                   "0%": { transform: "translate(0, 0)" },
//                   "100%": { transform: "translate(-100%, 0)" },
//                 },
//               }}
//             />
//           ))}
//         </div>
//       </Grid>
//       {/* <Grid
//         item
//         xs={12}
//         md={1}
//         lg={1}
//         mt={9}
//         ml={0}
//         sx={{
//           marginLeft: { lg: "-0.5rem", md: "0", sm: "1.3rem", xs: "0" },
//         }}
//       >
//         <FilledButton text="More" />
//       </Grid> */}
//     </Grid>
//   );
// };

// export default AutoImageSlider;

import React from "react";
import { Box } from "@mui/material";
import FilledButton from "../Buttons/FilledButton";
import medico from "../../../Assests/Clients/medico.png";
import askwebdr from "../../../Assests/Clients/askwebdr.png";
import bli from "../../../Assests/Clients/bli.png";
import drone from "../../../Assests/Clients/drone.png";
import liftService from "../../../Assests/Clients/liftService.png";
import orbits from "../../../Assests/Clients/orbits.png";
import samd from "../../../Assests/Clients/samd.svg";
import untic from "../../../Assests/Clients/untic.svg";
import liftS from "../../../Assests/Clients/liftS.png";
import enabling from "../../../Assests/Clients/enabling.png";
import leading from "../../../Assests/Clients/leading.png";
import jbsteel from "../../../Assests/Clients/jbsteel.png";
import housemd from "../../../Assests/Clients/housemd.png";
import pmevalution from "../../../Assests/Clients/pmevalution.png"
import denken from "../../../Assests/Clients/denken.png"

const images = [
  medico,
  askwebdr,
  bli,
  drone,
  liftService,
  orbits,
  denken,
  pmevalution,
  samd,
  untic,
  liftS,
  enabling,
  leading,
  jbsteel,
 

 

  
];

const AutoImageSlider = () => {
  return (
    <Box
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        marginLeft: "-2.5rem", // Cancel out the left padding of the main page container
        marginRight: "-2.5rem", // Cancel out the right padding of the main page container
      }}
    >
      {images.map((image, i) => (
        <Box
        key={i}
          component="img"
          src={image}
          alt={`Company Logo ${i + 1}`}
          sx={{
            width: { md: "9.4375rem", lg: "9.4375rem", sm: "7.1876rem", xs: "7.1876rem" },
            height: { lg: "9.4375rem", md: "9.4375rem", sm: "7.1876rem", xs: "7.1876rem" },
            objectFit: "contain",
            padding: "1rem",
            display: "inline-block",
            animation: "marquee 5s linear infinite",
            "@keyframes marquee": {
              "0%": { transform: "translate(0, 0)" },
              "100%": { transform: "translate(-100%, 0)" },
            },
          }}
        />
      ))}
    </Box>
  );
};

export default AutoImageSlider;
