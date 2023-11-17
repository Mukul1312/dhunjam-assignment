import axios from "axios";

const adminDetailsLoader = async ({ request, params }) => {
  // Fetching data from an API
  console.log("params", params);
  console.log("request", request);
  // const data = await axios.get("https://jsonplaceholder.typicode.com/users");
  return {
    id: 1,
    name: "Admin",
    email: "",
  };
};

export { adminDetailsLoader };
