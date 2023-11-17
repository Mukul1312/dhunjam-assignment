import { useEffect } from "react";
import { Form, useActionData, useNavigate } from "react-router-dom";
import { Stack, Button, Container } from "@mui/material";

const AdminLogin = () => {
  const response = useActionData();
  const navigate = useNavigate();

  useEffect(() => {
    if (response) {
      if (response.status === 200) {
        navigate(`/admin/${response.data.id}`);
      } else {
        alert(response.ui_err_msg);
      }
    }
  }, [response, navigate]);

  return (
    <Container
      maxWidth="lg"
      sx={{ display: "flex", flexDirection: "column", width: "30%", justifyContent: "center", height: "100vh" }}
    >
      <h1>Venue Admin Login</h1>
      <Form method="post">
        <Stack spacing={3} sx={{ my: 2 }}>
          <input type="text" name="username" placeholder="Enter your username" />
          <input type="text" name="password" placeholder="Enter your password" />
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#6741D9",
              borderRadius: "20px",
              '&:hover': {
                border: "1px solid #F0C3F1",
                backgroundColor: "#6741D9",
              },
            }}
          >
            {" "}
            Sign in{" "}
          </Button>
        </Stack>
      </Form>
    </Container>
  );
};

export default AdminLogin;
