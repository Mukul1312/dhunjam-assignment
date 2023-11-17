import { useEffect } from "react";
import { Form, useActionData, useNavigate } from "react-router-dom";

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
    <Form method="post">
      <input type="text" name="username" placeholder="Enter your username" />
      <input type="text" name="password" placeholder="Enter your password" />
      <button type="submit">Submit</button>
    </Form>
  );
};

export default AdminLogin;
