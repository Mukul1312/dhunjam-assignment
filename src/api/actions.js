import axios from "axios";

export const adminLoginAction = async ({params, request}) => {
    // Fetching data from an API
    console.log("params", params);
    console.log("request", request);

    return {
        id: 1,
        name: "Admin",
        email: ""
    }
};