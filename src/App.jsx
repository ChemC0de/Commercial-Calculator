import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Result from "./Components/Result";
import SliderSelect from "./Components/SliderSelect";
import RentalTermSelect from "./Components/RentalTermSelect";


function App() {
  const [data, setData] = useState({
    rentalValue: rentAmount *(rentalTerm-abatedRent) + securityDeposit ,
    securityDeposit: rentAmount * 2,
    rentAmount: 3000,
    rentalTerm: 60, //months
    abatedRent: 3, //months
});
    
  console.log(data)
  return (
<div className="App">
  <Navbar />
  <Container maxWidth="xl" sx={{marginTop:4}}>
    <Grid container spacing={5} alignItems="center">
      <Grid item xs={12} md={6}>
        <SliderSelect data={data} setData={setData}/>
        <RentalTermSelect data={data} setData={setData}/>
      </Grid>
      <Grid item xs={12} md={6}>
        <Result data={data}/>
      </Grid>
    </Grid>
  </Container>
</div>
);
}

export default App;