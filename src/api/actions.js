import axios from "axios";

const adminLoginAction = async ({ request }) => {
  // Fetching data from an API

  const FormData = await request.formData();
  const username = FormData.get("username");
  const password = FormData.get("password");

  try {
    const response = await axios.post("https://stg.dhunjam.in/account/admin/login", {
      username,
      password,
    });

    if(response.status === 200 && response.data.status === 200) {
        return response.data;
    }
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" }
  }
};

const adminDetailsUpdateAction = async ({ params, request }) => {
  // Fetching data from an API
  console.log("params", params);
  console.log("request", request);

  return {
    id: 1,
    name: "Admin",
    email: "",
  };
};

export { adminLoginAction, adminDetailsUpdateAction };
