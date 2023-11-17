import axios from "axios";

const adminDetailsLoader = async ({ params }) => {
  // Fetching data from an API
  const { id } = params;

  try {
    const response = await axios.get(`https://stg.dhunjam.in/account/admin/${id}`);

    if(response.status === 200 && response.data.status === 200 && response.data.response.toLowerCase() === "success") {
        return response.data.data;
    } else {
      alert(response.data.ui_err_msg);
    }
  } catch (error) {
    console.log(error);
    alert(error);
  }

};

export { adminDetailsLoader };


