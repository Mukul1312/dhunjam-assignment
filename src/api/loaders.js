import axios from "axios"

export const adminDetailsLoader = async ({request, params}) => {
    // Fetching data from an API
    const data = await axios.get("https://jsonplaceholder.typicode.com/users")
    return data.data
}