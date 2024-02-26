import React from "react";
import { Box, Container, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import errorPage from "../../Assests/errorpage.jpg";
import "./ErrorPage.css"

const ErrorPage = () => {
    const navigate = useNavigate();

    return (

        <Container sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "6rem"
        }}>
            <div className="Error-Page-Main">
                <div className="m-2">
                    <Button
                        variant="contained"
                        sx={{
                            width: "100%",
                        }}
                        onClick={() => navigate("/")}
                    >
                        Back to Home
                    </Button>
                </div>
                <Box marginTop={"1rem"} >
                    <img className="error-image" src={errorPage} alt="Error" />
                </Box>
            </div>
        </Container>

    );
};

export default ErrorPage;
