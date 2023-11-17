import { useLoaderData } from "react-router-dom";

const AdminDetails = () => {
  const data = useLoaderData();

  if(data === undefined) {
    return <h1>Something went wrong</h1>
  }

  return (
    <>
      <h1>Admin Details</h1>
      <p>{data.name}, {data.location} on Dhun Jam</p>
      <p>Do you want to charge your customers for requesting songs?</p> {data.charge_customers ? "Yes" : "No"}
      {data.charge_customers && <p>Custom song request amount-?</p>} {data.charge_customers && <p>Category 6: {data.amount.category_6}</p>}
      {data.charge_customers && <p>Regular song request amounts, from high to low</p>} {data.charge_customers && <p>Category 7: {data.amount.category_7}</p>} {data.charge_customers && <p>Category 8: {data.amount.category_8}</p>} {data.charge_customers && <p>Category 9: {data.amount.category_9}</p>} {data.charge_customers && <p>Category 10: {data.amount.category_10}</p>}
      <button>Save</button>
    </>
  )
}

export default AdminDetails

