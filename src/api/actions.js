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
  const { id } = params;
  const FormData = await request.formData();
  const charging_status = FormData.get("charging_status") == "yes" ? true : false;
  const custom_amount = FormData.get("custom_amount");
  const category_7 = FormData.get("category_7");
  const category_8 = FormData.get("category_8");
  const category_9 = FormData.get("category_9");
  const category_10 = FormData.get("category_10");
  
  const response = await axios.put(`https://stg.dhunjam.in/account/admin/${id}`, {
    charge_customers: charging_status,
    amount: {
      category_6: custom_amount,
      category_7,
      category_8,
      category_9,
      category_10,
    },
  });

  return {
    id: 1,
    name: "Admin",
    email: "",
  };
};

export { adminLoginAction, adminDetailsUpdateAction };
