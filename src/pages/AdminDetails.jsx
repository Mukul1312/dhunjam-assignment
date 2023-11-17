import { useLoaderData, useFetcher } from "react-router-dom";
import { Container, FormControl, Stack, RadioGroup, FormControlLabel, Radio, styled, Box, Button } from "@mui/material";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import BarChart from "../components/BarChart";
Chart.register(CategoryScale);

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background: theme.palette.mode === "dark" ? "rgba(57,75,89,.5)" : "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#137cbd",
  backgroundImage: "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#106ba3",
  },
});

function BpRadio(props) {
  return <Radio disableRipple color="secondary" checkedIcon={<BpCheckedIcon />} icon={<BpIcon />} {...props} />;
}

const AdminDetails = () => {
  const data = useLoaderData();
  const Fetcher = useFetcher();

  if (data === undefined) {
    return <h1>Something went wrong</h1>;
  }

  const style = {
    color: !data.charge_customers ? "#FFFFFF" : "#C2C2C2",
  };

  // replace underscores from keys with space and capitalize first letter
  const labels = Object.keys(data.amount).map((key) =>
    key.replace(/_/g, " ").replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()))
  );

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Amount",
        data: Object.values(data.amount),
        barThickness: 20,
        backgroundColor: "#F0C3F1",
      },
    ],
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: { md: "40%" },
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>
        {data.name}, {data.location} on Dhun Jam
      </h1>
      <Fetcher.Form method="put">
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1}>
          <Box gridColumn="span 6">
            <p>Do you want to charge your customers for requesting songs?</p>
          </Box>
          <Box gridColumn="span 6">
            <FormControl sx={{ top: "20%", left: "25%" }}>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="charging-status"
                defaultValue={data.charge_customers ? "yes" : "no"}
              >
                <FormControlLabel value="yes" control={<BpRadio />} label="Yes" />
                <FormControlLabel value="no" control={<BpRadio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box gridColumn="span 6">
            <p style={style}>Custom song request amount?</p>
          </Box>
          <Box gridColumn="span 6">
            <input
              min="99"
              type="number"
              name="custom-amount"
              defaultValue={data.amount.category_6}
              disabled={!data.charge_customers}
              style={style}
            />
          </Box>
          <Box gridColumn="span 6">
            <p style={style}>Regular song request amounts, from high to low</p>
          </Box>
          <Box gridColumn="span 6">
            <Stack direction="row" spacing={1}>
              <input
                min="99"
                type="number"
                name="category-7"
                defaultValue={data.amount.category_6}
                disabled={!data.charge_customers}
                style={style}
              />
              <input
                min="99"
                type="number"
                name="category-8"
                defaultValue={data.amount.category_7}
                disabled={!data.charge_customers}
                style={style}
              />
              <input
                min="99"
                type="number"
                name="category-9"
                defaultValue={data.amount.category_8}
                disabled={!data.charge_customers}
                style={style}
              />
              <input
                min="99"
                type="number"
                name="category-10"
                defaultValue={data.amount.category_9}
                disabled={!data.charge_customers}
                style={style}
              />
            </Stack>
          </Box>
        </Box>
        <BarChart chartData={chartData} />
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#6741D9",
            width: "100%",
            "&:hover": {
              border: "1px solid #F0C3F1",
              backgroundColor: "#6741D9",
            },
          }}
        >
          Save
        </Button>
      </Fetcher.Form>
    </Container>
  );
};

export default AdminDetails;
