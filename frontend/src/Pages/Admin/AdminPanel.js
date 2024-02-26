import React, { useState, useEffect, useMemo } from "react";
import {
  TextField,
  Container,
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import FilledButton from "../../Components/UI/Buttons/FilledButton";
import axios from "axios";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { useNavigate } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";

const ProjectCategories = [
  "Embedded",
  "IoT",
  "PCB",
  "Front End",
  "Mobile",
  "Back End, Database",
];
const IndustryCategories = [
  "Health care",
  "Finance",
  "Defence",
  "Public Sector",
  "Manufacturing",
  "Telecom",
  "Ecommerce",
];
function AdminPanel() {
  const [title, setTitle] = useState("");
  const [industry, setIndustry] = useState("");
  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [showIndustryForm, setShowIndustryForm] = useState(false);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [savedData, setSavedData] = useState([]);
  const [features, setFeatures] = useState("");

  const handleFeatureChange = (event) => {
    setFeatures(event.target.value);
  };

  //GET API CALL for projects.....
  const [projectsData, setProjectsData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  useEffect(() => {
    axios
      .get("https://octathorn.com/api/project")
      .then((response) => {
        setProjectsData(response.data);
        setCategories(response.data.map((item) => item.category));
        setSelectedCategory(response.data[0]?.category);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);
  const projectDescriptionStyle = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 2, // Maximum number of lines to display
    WebkitBoxOrient: "vertical",
  };

  const columns = [
    {
      accessorKey: "category",
      header: "Category",
      muiTableHeadCellProps: { sx: { color: "" } },
    },
    {
      accessorKey: "projects",
      header: "Projects",
      Cell: ({ cell }) => (
        <ul>
          {cell.getValue().map((project) => (
            <li key={project._id}>
              <strong>{project.title}</strong>
              <p style={projectDescriptionStyle}>{project.description}</p>
            </li>
          ))}
        </ul>
      ),
    },
  ];

  const tableData = categories.map((category) => ({
    category,
    projects:
      projectsData.find((item) => item.category === category)?.projects || [],
  }));
  const table = useMaterialReactTable({
    columns,
    data: tableData,
    enableColumnOrdering: true,
    enablePagination: false,
  });
  //POST API CALL.....

  const handleSubmitProjects = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }
    formData.append("description", description);
    formData.append("category", category);
    formData.append("industry", industry);
    formData.append("bussinues", JSON.stringify(savedData.map(item => item.value)));
    formData.append("challenges", JSON.stringify(savedData1.map(item => item.value)));
    formData.append("solutions", JSON.stringify(savedData2.map(item => item.value)));
    formData.append("objectives", JSON.stringify(savedData3.map(item => item.value)));
    formData.append("technologies", JSON.stringify(savedData4.map(item => item.value)));

    
    // Split the features string into an array of features
    const featuresArray = features.split(",");
    featuresArray.forEach((feature, index) => {
      formData.append(`features[${index}]`, feature);
    });

    try {
      await axios.post("http://192.168.18.143:443/api/project", formData);
      setTitle("");
      resetImages();
      setDescription("");
      setFeatures("");
      setIndustry("");
      setCategory("");
      alert("Project added successfully");
    } catch (error) {
      console.error(error);
      alert("Error occurred while adding project");
    }
  };

  const resetImages = () => {
    document.getElementById("fileInput").value = "";
    setImages([]);
  };

  //form handeling
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  // *******1st
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const tabData = ["Bus", "Chal", "Pr", "Obj", "Tech"];
  //
  const [fields, setFields] = useState([{ id: 1, value: "" }]);
 
  const addField = () => {
    const newFields = [...fields, { id: fields.length + 1, value: "" }];
    setFields(newFields);
  };

  const handleFieldChange = (id, value) => {
    const updatedFields = fields.map((field) =>
      field.id === id ? { ...field, value } : field
    );
    setFields(updatedFields);
  };
  const handleDoneClick = () => {
    // Filter out fields with no value
    const nonEmptyFields = fields.filter((field) => field.value.trim() !== "");
    // Save data to the array
    setSavedData(nonEmptyFields);
    // Log the saved data to the console
    console.log("Saved Data:",JSON.stringify(savedData.map(item => item.value)));
  };
  // *************1st

  // *******2nd

  const [fields1, setFields1] = useState([{ id: 1, value: "" }]);
  const [savedData1, setSavedData1] = useState([]);
  const addField1 = () => {
    const newFields1 = [...fields1, { id: fields1.length + 1, value: "" }];
    setFields1(newFields1);
  };

  const handleFieldChange1 = (id, value) => {
    const updatedFields1 = fields1.map((field) =>
      field.id === id ? { ...field, value } : field
    );
    setFields1(updatedFields1);
  };
  const handleDoneClick1 = () => {
    // Filter out fields with no value
    const nonEmptyFields1 = fields1.filter(
      (field) => field.value.trim() !== ""
    );
    // Save data to the array
    setSavedData1(nonEmptyFields1);
    // Log the saved data to the console
    console.log("Saved Data:", nonEmptyFields1);
  };
  // *************2nd

  // *******3rd

  const [fields2, setFields2] = useState([{ id: 1, value: "" }]);
  const [savedData2, setSavedData2] = useState([]);
  const addField2 = () => {
    const newFields2 = [...fields2, { id: fields2.length + 1, value: "" }];
    setFields2(newFields2);
  };

  const handleFieldChange2 = (id, value) => {
    const updatedFields2 = fields2.map((field) =>
      field.id === id ? { ...field, value } : field
    );
    setFields2(updatedFields2);
  };
  const handleDoneClick2 = () => {
    // Filter out fields with no value
    const nonEmptyFields2 = fields2.filter(
      (field) => field.value.trim() !== ""
    );
    // Save data to the array
    setSavedData2(nonEmptyFields2);
    // Log the saved data to the console
    console.log("Saved Data:", nonEmptyFields2);
  };
  // *************3rd

  // *******4rth
  const [fields3, setFields3] = useState([{ id: 1, value: "" }]);
  const [savedData3, setSavedData3] = useState([]);
  const addField3 = () => {
    const newFields3 = [...fields3, { id: fields3.length + 1, value: "" }];
    setFields3(newFields3);
  };

  const handleFieldChange3 = (id, value) => {
    const updatedFields3 = fields3.map((field) =>
      field.id === id ? { ...field, value } : field
    );
    setFields3(updatedFields3);
  };
  const handleDoneClick3 = () => {
    // Filter out fields with no value
    const nonEmptyFields3 = fields3.filter(
      (field) => field.value.trim() !== ""
    );
    // Save data to the array
    setSavedData3(nonEmptyFields3);
    // Log the saved data to the console
    console.log("Saved Data:", nonEmptyFields3);
  };
  // *************4rth

  
  // *******5th
  const [fields4, setFields4] = useState([{ id: 1, value: "" }]);
  const [savedData4, setSavedData4] = useState([]);
  const addField4 = () => {
    const newFields4 = [...fields4, { id: fields4.length + 1, value: "" }];
    setFields4(newFields4);
  };

  const handleFieldChange4 = (id, value) => {
    const updatedFields4 = fields4.map((field) =>
      field.id === id ? { ...field, value } : field
    );
    setFields4(updatedFields4);
  };
  const handleDoneClick4 = () => {
    // Filter out fields with no value
    const nonEmptyFields4 = fields4.filter(
      (field) => field.value.trim() !== ""
    );
    // Save data to the array
    setSavedData4(nonEmptyFields4);
    // Log the saved data to the console
    console.log("Saved Data:", nonEmptyFields4);
  };
  // *************5th

  const renderTabContent = (index) => {
    switch (index) {
      case 0:
        return (
          <div>
            {fields.map((field) => (
              <TextField
                key={field.id}
                label={`Field ${field.id}`}
                value={field.value}
                onChange={(e) => handleFieldChange(field.id, e.target.value)}
                fullWidth
                margin="normal"
              />
            ))}
            <IconButton
              onClick={addField}
              color="primary"
              aria-label="Add Field"
            >
              <AddIcon />
            </IconButton>
            <br></br>
            <Button
              onClick={handleDoneClick}
              variant="contained"
              color="primary"
            >
              Done
            </Button>
          </div>
        );
      case 1:
        return (
          <div>
            {fields1.map((field) => (
              <TextField
                key={field.id}
                label={`Field ${field.id}`}
                value={field.value}
                onChange={(e) => handleFieldChange1(field.id, e.target.value)}
                fullWidth
                margin="normal"
              />
            ))}
            <IconButton
              onClick={addField1}
              color="primary"
              aria-label="Add Field"
            >
              <AddIcon />
            </IconButton>
            <br></br>
            <Button
              onClick={handleDoneClick1}
              variant="contained"
              color="primary"
            >
              Done
            </Button>
          </div>
        );
      case 2:
        return (
          <div>
            {fields2.map((field) => (
              <TextField
                key={field.id}
                label={`Field ${field.id}`}
                value={field.value}
                onChange={(e) => handleFieldChange2(field.id, e.target.value)}
                fullWidth
                margin="normal"
              />
            ))}
            <IconButton
              onClick={addField2}
              color="primary"
              aria-label="Add Field"
            >
              <AddIcon />
            </IconButton>
            <br></br>
            <Button
              onClick={handleDoneClick2}
              variant="contained"
              color="primary"
            >
              Done
            </Button>
          </div>
        );
        case 3:
        return (
          <div>
            {fields3.map((field) => (
              <TextField
                key={field.id}
                label={`Field ${field.id}`}
                value={field.value}
                onChange={(e) => handleFieldChange3(field.id, e.target.value)}
                fullWidth
                margin="normal"
              />
            ))}
            <IconButton
              onClick={addField3}
              color="primary"
              aria-label="Add Field"
            >
              <AddIcon />
            </IconButton>
            <br></br>
            <Button
              onClick={handleDoneClick3}
              variant="contained"
              color="primary"
            >
              Done
            </Button>
          </div>
        );
        
        case 4:
        return (
          <div>
            {fields4.map((field) => (
              <TextField
                key={field.id}
                label={`Field ${field.id}`}
                value={field.value}
                onChange={(e) => handleFieldChange4(field.id, e.target.value)}
                fullWidth
                margin="normal"
              />
            ))}
            <IconButton
              onClick={addField4}
              color="primary"
              aria-label="Add Field"
            >
              <AddIcon />
            </IconButton>
            <br></br>
            <Button
              onClick={handleDoneClick4}
              variant="contained"
              color="primary"
            >
              Done
            </Button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Container
      maxWidth="md"
      sx={{ marginTop: "10%" }}
      style={{ background: "" }}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <button onClick={handleLogout}>Logout</button>
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <Button
            onClick={() => {
              setShowIndustryForm(true);
              setShowProjectForm(false);
            }}
          >
            Manage Industries
          </Button>
          <Button
            onClick={() => {
              setShowProjectForm(true);
              setShowIndustryForm(false);
            }}
          >
            Manage Projects
          </Button>
          <Button onClick={() => {}}>Manage Reviews</Button>
        </Box>
        {!showIndustryForm && !showProjectForm && (
          <>
            <Typography
              variant="h4"
              sx={{ paddingTop: "5%", paddingBottom: "5%" }}
            >
              Welcome to Octathorn Admin Panel
            </Typography>
          </>
        )}

        {showProjectForm && (
          <>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleClickOpen}
            >
              Add Projects
            </Button>
            <MaterialReactTable table={table} />

            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="form-dialog-title"
              sx={{ maxWidth: "100%" }}
              style={{ maxWidth: "100%" }}
            >
              <DialogTitle id="form-dialog-title">
                Manage Featured Projects
              </DialogTitle>
              <DialogContent>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{ paddingTop: "5%", paddingBottom: "5%" }}
                  >
                    Manage Featured Projects
                  </Typography>
                  <TextField
                    label="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    sx={{ paddingTop: "0%", paddingBottom: "5%" }}
                  />
                  <input
                    type="file"
                    multiple
                    onChange={(e) => setImages(e.target.files)}
                    required
                    style={{ paddingBottom: "5%" }}
                    id="fileInput"
                  />

                  <TextField
                    label="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    sx={{ paddingTop: "0%", paddingBottom: "5%" }}
                  />
                  <Autocomplete
                    sx={{ paddingTop: "0%", paddingBottom: "5%", width: 230 }}
                    value={category}
                    onChange={(event, newValue) => setCategory(newValue)}
                    options={ProjectCategories}
                    freeSolo
                    renderInput={(params) => (
                      <TextField {...params} label="Category" required />
                    )}
                  />
                  <Autocomplete
                    sx={{ paddingTop: "0%", paddingBottom: "5%", width: 230 }}
                    value={industry}
                    onChange={(event, newValue) => setIndustry(newValue)}
                    options={IndustryCategories}
                    freeSolo
                    renderInput={(params) => (
                      <TextField {...params} label="Industry" required />
                    )}
                  />
                  <TextField
                    label="Features"
                    value={features}
                    onChange={handleFeatureChange}
                    required
                    multiline
                    rows={4}
                    sx={{ paddingTop: "0%", paddingBottom: "5%" }}
                    helperText="Enter features separated by commas"
                  />
                  {/* Extra Header */}
                  <Box sx={{ width: "100%" }}>
                    <Box
                      sx={{
                        borderBottom: 1,
                        borderColor: "divider",
                        overflowX: "auto",
                      }}
                    >
                      <Tabs value={value} onChange={handleChange} centered>
                        {tabData.map((tab, index) => (
                          <Tab label={tab} key={index} />
                        ))}
                      </Tabs>
                    </Box>
                    <Typography sx={{ p: 2 }}>
                      {renderTabContent(value)}
                    </Typography>
                  </Box>
                  {/* Extra Header */}
                  <FilledButton
                    text={"Submit"}
                    onClick={handleSubmitProjects}
                  />
                  <Button
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    Close
                  </Button>
                </Box>
              </DialogContent>
            </Dialog>
            <Button
              onClick={() => {
                setShowProjectForm(false);
              }}
            >
              Close Projects
            </Button>
          </>
        )}
      </Box>
    </Container>
  );
}

export default AdminPanel;

//...............multiple catgories and indsutries................

// import React, { useState, useEffect, useMemo } from 'react';
// import { TextField, Container, Box, Typography, Button, Dialog, DialogTitle, DialogContent } from '@mui/material';
// import Autocomplete from '@mui/material/Autocomplete';
// import FilledButton from '../../Components/UI/Buttons/FilledButton';
// import axios from 'axios';
// import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';

// const ProjectCategories = ['Embedded', 'IoT', 'PCB', 'Front End', 'Mobile'];
// const IndustryCategories = ['Health care', 'Finance', 'Defence', 'Public Sector', 'Manufacturing', 'Telecom', 'Ecommerce'];
// function AdminPanel() {
//   const [title, setTitle] = useState('');
//   const [industry, setIndustry] = useState([]);
//   const [images, setImages] = useState([]);
//   const [description, setDescription] = useState('');
//   const [category, setCategory] = useState([]);
//   const [showIndustryForm, setShowIndustryForm] = useState(false);
//   const [showProjectForm, setShowProjectForm] = useState(false);
//   const [features, setFeatures] = useState('');

//   const handleFeatureChange = (event) => {
//     setFeatures(event.target.value);
//   };

//   //GET API CALL for projects.....
//   const [projectsData, setProjectsData] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   useEffect(() => {
//     axios
//       .get('https://octathorn.com/api/project')
//       .then((response) => {
//         setProjectsData(response.data);
//         setCategories(response.data.map((item) => item.category));
//         setSelectedCategory(response.data[0]?.category);
//       })
//       .catch((error) => {
//         console.error('Error fetching data: ', error);
//       });
//   }, []);
//   const projectDescriptionStyle = {
//     overflow: 'hidden',
//     textOverflow: 'ellipsis',
//     display: '-webkit-box',
//     WebkitLineClamp: 2, // Maximum number of lines to display
//     WebkitBoxOrient: 'vertical',
//   };

//   const columns = [
//     {
//       accessorKey: 'category',
//       header: 'Category',
//       muiTableHeadCellProps: { sx: { color: '' } },
//     },
//     {
//       accessorKey: 'projects',
//       header: 'Projects',
//       Cell: ({ cell }) => (
//         <ul>
//           {cell.getValue().map((project) => (
//             <li key={project._id}>
//               <strong>{project.title}</strong>
//               <p style={projectDescriptionStyle}>{project.description}</p>
//             </li>
//           ))}
//         </ul>
//       ),
//     },
//   ];

//   const tableData = categories.map((category) => ({
//     category,
//     projects: projectsData.find((item) => item.category === category)?.projects || [],
//   }));
//   const table = useMaterialReactTable({
//     columns,
//     data: tableData,
//     enableColumnOrdering: true,
//     enablePagination: false,

//   });
//   //POST API CALL.....

//   const handleSubmitProjects = async (event) => {
//     event.preventDefault();

//     const formData = new FormData();
//     formData.append('title', title);
//     for (let i = 0; i < images.length; i++) {
//       formData.append('images', images[i]);
//     }
//     formData.append('description', description);
//     category.forEach((cat, index) => {
//       formData.append(`category[${index}]`, cat);
//     });

//     industry.forEach((ind, index) => {
//       formData.append(`industry[${index}]`, ind);
//     });
//     // Split the features string into an array of features
//     const featuresArray = features.split(',');
//     featuresArray.forEach((feature, index) => {
//       formData.append(`features[${index}]`, feature);
//     });

//     try {
//       await axios.post('https://octathorn.com/api/project', formData);
//       setTitle('');
//       resetImages();
//       setDescription('');
//       setFeatures('');
//       setIndustry([]); // Reset to empty array
//       setCategory([]); // Reset to empty array
//       alert('Project added successfully');
//     } catch (error) {
//       console.error(error);
//       alert('Error occurred while adding project');
//     }
//   };

//   const resetImages = () => {
//     document.getElementById('fileInput').value = '';
//     setImages([]);
//   };

//   //form handeling
//   const [open, setOpen] = useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Container maxWidth="md" sx={{ marginTop: "10%" }} style={{ background: '' }}>
//       <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
//         <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
//           <Button onClick={() => { setShowProjectForm(true); setShowIndustryForm(false); }}>Manage Projects</Button>
//           <Button onClick={() => { }}>Manage Reviews</Button>
//         </Box>
//         {!showIndustryForm && !showProjectForm && (
//           <>
//             <Typography variant="h4" sx={{ paddingTop: '5%', paddingBottom: '5%' }}>Welcome to Octathorn Admin Panel</Typography>
//           </>
//         )}
//         {showProjectForm && (
//           <>
//             <Button variant="outlined" color="primary" onClick={handleClickOpen}>
//               Add Projects
//             </Button>
//             <MaterialReactTable table={table} />

//             <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
//               <DialogTitle id="form-dialog-title">Manage Featured Projects</DialogTitle>
//               <DialogContent>
//                 <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
//                   <Typography variant="h4" sx={{ paddingTop: '5%', paddingBottom: '5%' }}>Manage Featured Projects</Typography>
//                   <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} required sx={{ paddingTop: '0%', paddingBottom: '5%' }} />
//                   <input type="file" multiple onChange={(e) => setImages(e.target.files)} required style={{ paddingBottom: '5%' }} id="fileInput" />

//                   <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} required sx={{ paddingTop: '0%', paddingBottom: '5%' }} />
//                   <Autocomplete
//                     multiple
//                     sx={{ paddingTop: '0%', paddingBottom: '5%', width: 230, }}
//                     value={category}
//                     onChange={(event, newValue) => setCategory(newValue)}
//                     options={ProjectCategories}
//                     freeSolo
//                     renderInput={(params) => (
//                       <TextField
//                         {...params}
//                         label="Category"
//                         required
//                       />
//                     )}
//                   />
//                   <Autocomplete
//                     multiple
//                     sx={{ paddingTop: '0%', paddingBottom: '5%', width: 230, }}
//                     value={industry}
//                     onChange={(event, newValue) => setIndustry(newValue)}
//                     options={IndustryCategories}
//                     freeSolo
//                     renderInput={(params) => (
//                       <TextField
//                         {...params}
//                         label="Industry"
//                         required
//                       />
//                     )}
//                   />
//                   <TextField
//                     label="Features"
//                     value={features}
//                     onChange={handleFeatureChange}
//                     required
//                     multiline
//                     rows={4}
//                     sx={{ paddingTop: '0%', paddingBottom: '5%' }}
//                     helperText="Enter features separated by commas"
//                   />

//                   <FilledButton text={'Submit'} onClick={handleSubmitProjects} />
//                   <Button onClick={() => { setOpen(false); }}>Close</Button>
//                 </Box>
//               </DialogContent>
//             </Dialog>
//             <Button onClick={() => { setShowProjectForm(false); }}>Close Projects</Button>
//           </>
//         )}
//       </Box>
//     </Container>
//   );
// }

// export default AdminPanel;
